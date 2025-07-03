# Connect-RPC Node.js 内存泄漏复现项目

这个项目用于复现 Connect-RPC Node.js 客户端在处理服务器流式响应时的内存泄漏问题。

## 问题描述

**发现的问题**：客户端在接收服务器流式请求时，已经被客户端收到并处理后的数据没有被垃圾回收（GC），导致整个流的所有数据都会被保存在内存中，造成内存泄漏。

## 项目结构

```
d:\test\
├── build/
│   └── storage/
│       ├── file_pb.cjs          # Protobuf 生成的服务定义（CommonJS 格式）
│       ├── file_pb.d.ts         # TypeScript 类型定义
│       └── file_pb.d.ts.map     # 类型映射文件
├── server.js               # Connect-RPC 服务器（用于复现）
├── memory-leak-demo.js          # 客户端内存泄漏演示
├── package.json                 # 项目依赖配置
├── pnpm-lock.yaml              # 依赖锁定文件
└── README.md                    # 项目说明文档
```

## 环境要求

- Node.js 22.14.0 （推荐）
- pnpm（推荐）

## 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

```

## 启动项目

### 1. 启动服务器

```bash
# 启动 Connect-RPC 服务器
node server.js
```

服务器将在以下地址启动：
- **服务地址**：`https://0.0.0.0:9999`
- **健康检查**：`https://0.0.0.0:9999/health`

### 2. 运行内存泄漏演示

在另一个终端窗口中运行客户端：

```bash
# 运行内存泄漏演示客户端
node memory-leak-demo.js
```

## 内存泄漏复现步骤

1. **启动服务器**：运行 `node server.js`
2. **运行客户端**：运行 `node memory-leak-demo.js`
3. **观察内存使用**：
   - 客户端会会每 100 个 response 迭代显示一次内存使用情况
   - 服务器会每 100 个块显示一次内存状态
   - 注意观察客户端内存持续增长而不释放

### 预期现象

- **正常情况**：处理过的数据应该被 GC 回收，内存使用保持相对稳定
- **问题现象**：客户端内存持续增长，已处理的流数据没有被释放

## 技术细节

### 服务器实现
- 使用 `@connectrpc/connect-fastify` 插件
- 实现 `FileService.CompressAndDownload` 流式 RPC
- 生成大量数据块模拟大文件传输
- 内置内存监控和健康检查

### 客户端实现
- 使用 `@connectrpc/connect-node` 客户端
- 通过异步迭代器处理流式响应
- 实时监控内存使用情况
- 演示内存泄漏问题

## 配置选项

### 环境变量

- `PORT`：服务器端口（默认：9999）
- `HOST`：服务器主机（默认：0.0.0.0）
- `CHUNK_SIZE`：数据块大小（默认：3MB）
- `MAX_CHUNKS`：最大块数量（默认：50000）

### 自定义配置

可以修改以下文件中的参数：

**server.js**：
```javascript
const totalChunks = 50000; // 调整总块数
const chunkSize = chunkSizeByte || 3 * 1024 * 1024; // 调整块大小
```

**memory-leak-demo.js**：
```javascript
chunkSizeByte: 1024 * 1024, // 调整请求的块大小
```



```markdown
# Connect-RPC Node.js 客户端流式响应内存泄漏

## 问题描述
客户端在接收服务器流式响应时，已处理的数据没有被垃圾回收，导致内存持续增长。

## 环境信息
- Node.js 版本：[版本号]
- @connectrpc/connect 版本：[版本号]
- @connectrpc/connect-node 版本：[版本号]
- 操作系统：[系统信息]

## 复现步骤
1. 使用提供的复现项目：[项目链接]
2. 启动服务器：`node server.js`
3. 运行客户端：`node memory-leak-demo.js`
4. 观察客户端内存持续增长

## 预期行为
已处理的流数据应该被 GC 回收，内存使用保持相对稳定。

## 实际行为
客户端内存持续增长，已处理的数据没有被释放。

## 创建项目仓库步骤

### 1. 在 GitHub 创建仓库

1. 登录 GitHub
2. 点击右上角 "+" → "New repository"
3. 填写仓库信息：
   - **Repository name**：`connectrpc-memory-leak-reproduction`
   - **Description**：`Reproduction project for Connect-RPC Node.js client memory leak in server streaming`
   - **Visibility**：Public（便于分享和报告问题）
   - 勾选 "Add a README file"
   - 选择 "Node" .gitignore 模板
   - 选择 MIT License

### 2. 初始化本地仓库

```bash
# 在项目目录中初始化 Git
cd d:\test
git init

# 添加远程仓库
git remote add origin https://github.com/[你的用户名]/connectrpc-memory-leak-reproduction.git

# 创建 .gitignore 文件
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
echo "*.log" >> .gitignore

# 添加文件
git add .
git commit -m "Initial commit: Connect-RPC memory leak reproduction project"

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 3. 完善仓库

1. **添加标签**：在 GitHub 仓库页面添加相关标签
   - `connectrpc`
   - `nodejs`
   - `memory-leak`
   - `reproduction`
   - `streaming`

2. **创建 Issues 模板**：在 `.github/ISSUE_TEMPLATE/` 目录下创建模板

3. **添加 GitHub Actions**：可选，用于自动化测试

### 4. 分享和引用

创建完成后，可以在以下场景中使用仓库链接：

- 在 Connect-RPC 相关仓库中报告 Issue
- 在社区论坛或讨论组中分享
- 作为技术文档的参考案例

## 许可证

MIT License - 详见 LICENSE 文件

## 贡献

欢迎提交 Pull Request 来改进这个复现项目，或者报告新发现的问题。

## 联系方式

如有问题，请通过 GitHub Issues 联系。