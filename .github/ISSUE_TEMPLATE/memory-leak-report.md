---
name: Memory Leak Report
about: Report a memory leak issue in Connect-RPC Node.js client
title: '[MEMORY LEAK] '
labels: 'bug, memory-leak, needs-investigation'
assignees: ''
---

## 问题描述 / Problem Description

**简要描述内存泄漏问题：**
A clear and concise description of the memory leak issue.

## 环境信息 / Environment Information

**请填写以下信息：**

- **Node.js 版本 / Node.js Version**: [e.g. v18.17.0]
- **操作系统 / Operating System**: [e.g. Windows 11, macOS 13.0, Ubuntu 22.04]
- **@connectrpc/connect 版本**: [e.g. 1.1.4]
- **@connectrpc/connect-node 版本**: [e.g. 1.1.4]
- **@connectrpc/connect-fastify 版本**: [e.g. 1.1.4]

```bash
# 请运行以下命令并粘贴结果
node --version
npm list @connectrpc/connect @connectrpc/connect-node @connectrpc/connect-fastify
```

## 复现步骤 / Steps to Reproduce

**请详细描述复现步骤：**

1. 克隆复现项目：`git clone [repository-url]`
2. 安装依赖：`pnpm install`
3. 启动服务器：`node grpc-server.js`
4. 运行客户端：`node memory-leak-demo.js`
5. 观察内存使用情况

## 预期行为 / Expected Behavior

**描述您期望的正常行为：**
A clear and concise description of what you expected to happen.

例如：已处理的流数据应该被垃圾回收，客户端内存使用应该保持相对稳定。

## 实际行为 / Actual Behavior

**描述实际发生的问题：**
A clear and concise description of what actually happened.

例如：客户端内存持续增长，已处理的数据没有被释放，最终可能导致内存溢出。

## 内存使用数据 / Memory Usage Data

**请提供内存使用情况：**

**初始内存使用：**
- RSS: [e.g. 50MB]
- Heap Used: [e.g. 20MB]

**峰值内存使用：**
- RSS: [e.g. 500MB]
- Heap Used: [e.g. 450MB]

**处理的数据量：**
- 总块数: [e.g. 10000]
- 每块大小: [e.g. 1MB]
- 总数据量: [e.g. 10GB]

## 日志和截图 / Logs and Screenshots

**相关日志：**
```
请粘贴相关的错误日志或控制台输出
```

**内存使用截图：**
如果可能，请提供内存使用情况的截图或图表。

## 配置信息 / Configuration

**服务器配置：**
```javascript
// 请提供相关的服务器配置
const totalChunks = 50000;
const chunkSize = 3 * 1024 * 1024; // 3MB
```

**客户端配置：**
```javascript
// 请提供相关的客户端配置
chunkSizeByte: 1024 * 1024, // 1MB
```

## 附加信息 / Additional Context

**其他相关信息：**
Add any other context about the problem here.

- 是否在生产环境中遇到此问题？
- 是否有特定的触发条件？
- 是否尝试过其他解决方案？

## 复现项目链接 / Reproduction Project

**如果您有自己的复现项目，请提供链接：**
[GitHub repository link]

## 检查清单 / Checklist

请确认您已经完成以下步骤：

- [ ] 我已经搜索了现有的 Issues，确认这不是重复问题
- [ ] 我已经使用最新版本的相关包进行测试
- [ ] 我已经提供了完整的环境信息
- [ ] 我已经提供了详细的复现步骤
- [ ] 我已经包含了相关的日志和错误信息
- [ ] 我已经测试了提供的复现项目