# Connect-RPC Node.js Memory Leak Reproduction Project

This project is designed to reproduce memory leak issues in Connect-RPC Node.js clients when handling server streaming responses.

## Problem Description

**Issue Found**: When the client receives server streaming requests, data that has been received and processed by the client is not being garbage collected (GC), causing all stream data to remain in memory and resulting in memory leaks.

## Project Structure

```
d:\test\
├── build/
│   └── storage/
│       ├── file_pb.cjs          # Protobuf generated service definitions (CommonJS format)
│       ├── file_pb.d.ts         # TypeScript type definitions
│       └── file_pb.d.ts.map     # Type mapping files
├── server.js                    # Connect-RPC server (for reproduction)
├── memory-leak-demo.js          # Client memory leak demonstration
├── package.json                 # Project dependency configuration
├── pnpm-lock.yaml              # Dependency lock file
└── README.md                    # Project documentation
```

## Environment Requirements

- Node.js 22.14.0 (recommended)
- pnpm (recommended)

## Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install
```

## Starting the Project

### 1. Start the Server

```bash
# Start Connect-RPC server
node server.js
```

The server will start at the following addresses:
- **Service Address**: `https://0.0.0.0:9999`
- **Health Check**: `https://0.0.0.0:9999/health`

### 2. Run Memory Leak Demonstration

Run the client in another terminal window:

```bash
# Run memory leak demonstration client
node memory-leak-demo.js
```

## Memory Leak Reproduction Steps

1. **Start Server**: Run `node server.js`
2. **Run Client**: Run `node memory-leak-demo.js`
3. **Observe Memory Usage**:
   - Client displays memory usage every 100 response iterations
   - Server shows memory status every 100 chunks
   - Notice client memory continuously growing without release

### Expected Behavior

- **Normal Case**: Processed data should be GC collected, memory usage remains relatively stable
- **Problem Case**: Client memory continuously grows, processed stream data is not released

## Technical Details

### Server Implementation
- Uses `@connectrpc/connect-fastify` plugin
- Implements `FileService.CompressAndDownload` streaming RPC
- Generates large amounts of data chunks to simulate large file transfers
- Built-in memory monitoring and health checks

### Client Implementation
- Uses `@connectrpc/connect-node` client
- Processes streaming responses through async iterators
- Real-time memory usage monitoring
- Demonstrates memory leak issues

## Configuration Options

### Environment Variables

- `PORT`: Server port (default: 9999)
- `HOST`: Server host (default: 0.0.0.0)
- `CHUNK_SIZE`: Data chunk size (default: 3MB)
- `MAX_CHUNKS`: Maximum number of chunks (default: 50000)

### Custom Configuration

You can modify parameters in the following files:

**server.js**:
```javascript
const totalChunks = 50000; // Adjust total chunks
const chunkSize = chunkSizeByte || 3 * 1024 * 1024; // Adjust chunk size
```

**memory-leak-demo.js**:
```javascript
chunkSizeByte: 1024 * 1024, // Adjust requested chunk size
```
