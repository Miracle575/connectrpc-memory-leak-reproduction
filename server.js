import { fastifyConnectPlugin } from '@connectrpc/connect-fastify';
import fastify from 'fastify';
import { createRequire } from 'module';
import crypto from 'crypto';

const require = createRequire(import.meta.url);
const { FileService } = require('./build/storage/file_pb.cjs');

// Main server function
async function startServer() {

// Connect-RPC service implementation
const fileServiceImpl = {
  async *compressAndDownload(request) {
    const { userId, paths, chunkSizeByte } = request;
    
    console.log(`Starting compression for user: ${userId}`);
    console.log(`Paths: ${paths.join(', ')}`);
    console.log(`Chunk size: ${chunkSizeByte} bytes`);

    // Simulate large file processing for memory leak demonstration
    const totalChunks = 50000; // Simulate a large file
    const chunkSize = chunkSizeByte || 3 * 1024 * 1024; // 3MB default
    
    for (let i = 0; i < totalChunks; i++) {
      // Generate random data to simulate file content
      const chunk = crypto.randomBytes(Math.min(chunkSize, 1024 * 1024)); // Max 1MB per chunk for demo
      
      const response = {
        chunk: chunk
      };
      
      yield response;
      
      // Small delay to simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1));
      
      // Log progress every 200 chunks
      if (i % 100 === 0) {
        console.log(`Processed ${i}/${totalChunks} chunks`);
        // Log server memory usage
        const memUsage = process.memoryUsage();
        console.log(`Server memory: RSS ${Math.round(memUsage.rss / 1024 / 1024)}MB, Heap ${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`);
      }
    }
    
    console.log('Compression and streaming completed');
  }
};

// Create Connect-RPC routes function
const routes = (router) => {
  router.service(FileService, fileServiceImpl);
};

// Create Fastify server with Connect-RPC plugin
const server = fastify({
  http2: true,
});

// Register Connect-RPC plugin
await server.register(fastifyConnectPlugin, {
  routes,
});

// Add health check endpoint
server.get('/health', async (request, reply) => {
  const memUsage = process.memoryUsage();
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    memory: {
      rss: Math.round(memUsage.rss / 1024 / 1024) + 'MB',
      heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024) + 'MB',
      heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024) + 'MB',
      external: Math.round(memUsage.external / 1024 / 1024) + 'MB'
    }
  };
});

const PORT = process.env.PORT || 9999;
const HOST = process.env.HOST || '0.0.0.0';

// Start server
try {
  await server.listen({ port: PORT, host: HOST });
  console.log(`🚀 Connect-RPC server listening on http://${HOST}:${PORT}`);
  console.log(`📊 Health check available at: http://${HOST}:${PORT}/health`);
  console.log(`🔧 FileService.CompressAndDownload available for streaming`);
  console.log(`💾 Server memory monitoring enabled`);
} catch (err) {
  console.error('Error starting server:', err);
  process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down server...');
  try {
    await server.close();
    console.log('✅ Server closed gracefully');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error during shutdown:', err);
    process.exit(1);
  }
});

process.on('SIGTERM', async () => {
   console.log('\n🛑 Received SIGTERM, shutting down...');
   try {
     await server.close();
     console.log('✅ Server closed gracefully');
     process.exit(0);
   } catch (err) {
     console.error('❌ Error during shutdown:', err);
     process.exit(1);
   }
 });
}

// Start the server
startServer().catch((err) => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});