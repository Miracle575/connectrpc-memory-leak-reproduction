import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { FileService } = require('./build/storage/file_pb.cjs'); // Your protobuf-generated service

// Create client with HTTP/2 transport
const transport = createConnectTransport({
  baseUrl: "http://localhost:9999",
  httpVersion: "2",
});

const client = createClient(FileService, transport);

// Reproduce memory leak
async function demonstrateMemoryLeak() {
  const initialMemory = process.memoryUsage().rss;
  let responseCount = 0;
  let totalBytes = 0;

  console.log(`Initial memory: ${Math.round(initialMemory / 1024 / 1024)}MB`);

  try {
    // Call streaming method
    const stream = client.compressAndDownload({
      userId: "demo_admin",
      paths: ["/data/home/k8s/demo_admin/abc","/data/home/k8s/demo_admin/copy-test"],
      chunkSizeByte: 3 * 1024 * 1024,
    });

    // Simple processing loop - should not accumulate memory
    for await (const response of stream) {
      responseCount++;
      totalBytes += response.chunk.byteLength;
      
      // Log memory usage every 10k responses
      if (responseCount % 100 === 0) {
        const currentMemory = process.memoryUsage().rss;
        const memoryGrowth = currentMemory - initialMemory;
        
        console.log({
          responseCount,
          totalMB: Math.round(totalBytes / 1024 / 1024),
          currentMemoryMB: Math.round(currentMemory / 1024 / 1024),
          memoryGrowthMB: Math.round(memoryGrowth / 1024 / 1024),
        });
        
        // Force garbage collection if available
        if (global.gc) {
          global.gc();
        }
      }
      
      // Small delay to simulate processing
      await new Promise(resolve => setTimeout(resolve, 10));
    }
    
    console.log('Stream completed successfully');
    
  } catch (error) {
    console.error('Stream error:', error);
  }
  
  // Final memory report
  const finalMemory = process.memoryUsage().rss;
  const totalGrowth = finalMemory - initialMemory;
  
  console.log('\n=== Final Memory Report ===');
  console.log(`Initial memory: ${Math.round(initialMemory / 1024 / 1024)}MB`);
  console.log(`Final memory: ${Math.round(finalMemory / 1024 / 1024)}MB`);
  console.log(`Total growth: ${Math.round(totalGrowth / 1024 / 1024)}MB`);
  console.log(`Total responses: ${responseCount}`);
  console.log(`Total data processed: ${Math.round(totalBytes / 1024 / 1024)}MB`);
}

// Run the demonstration
console.log('Starting memory leak demonstration...');
console.log('Note: Run with --expose-gc flag to enable garbage collection monitoring');
console.log('Example: node --expose-gc memory-leak-demo.js\n');

demonstrateMemoryLeak().catch(console.error);


export { demonstrateMemoryLeak };