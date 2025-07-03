import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file storage/file.proto.
 */
export declare const file_storage_file: GenFile;
/**
 * @generated from message api.storage.FileInfo
 */
export type FileInfo = Message<"api.storage.FileInfo"> & {
    /**
     * @generated from field: api.storage.FileType file_type = 1;
     */
    fileType: FileType;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string mod_time = 3;
     */
    modTime: string;
    /**
     * @generated from field: uint64 size_byte = 4;
     */
    sizeByte: bigint;
    /**
     * @generated from field: uint32 mode = 5;
     */
    mode: number;
};
/**
 * Describes the message api.storage.FileInfo.
 * Use `create(FileInfoSchema)` to create a new message.
 */
export declare const FileInfoSchema: GenMessage<FileInfo>;
/**
 * @generated from message api.storage.ReadDirectoryRequest
 */
export type ReadDirectoryRequest = Message<"api.storage.ReadDirectoryRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string dir_path = 2;
     */
    dirPath: string;
};
/**
 * Describes the message api.storage.ReadDirectoryRequest.
 * Use `create(ReadDirectoryRequestSchema)` to create a new message.
 */
export declare const ReadDirectoryRequestSchema: GenMessage<ReadDirectoryRequest>;
/**
 * @generated from message api.storage.ReadDirectoryResponse
 */
export type ReadDirectoryResponse = Message<"api.storage.ReadDirectoryResponse"> & {
    /**
     * @generated from field: repeated api.storage.FileInfo files_info = 1;
     */
    filesInfo: FileInfo[];
};
/**
 * Describes the message api.storage.ReadDirectoryResponse.
 * Use `create(ReadDirectoryResponseSchema)` to create a new message.
 */
export declare const ReadDirectoryResponseSchema: GenMessage<ReadDirectoryResponse>;
/**
 * @generated from message api.storage.CreateFileRequest
 */
export type CreateFileRequest = Message<"api.storage.CreateFileRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string file_path = 2;
     */
    filePath: string;
};
/**
 * Describes the message api.storage.CreateFileRequest.
 * Use `create(CreateFileRequestSchema)` to create a new message.
 */
export declare const CreateFileRequestSchema: GenMessage<CreateFileRequest>;
/**
 * @generated from message api.storage.CreateFileResponse
 */
export type CreateFileResponse = Message<"api.storage.CreateFileResponse"> & {};
/**
 * Describes the message api.storage.CreateFileResponse.
 * Use `create(CreateFileResponseSchema)` to create a new message.
 */
export declare const CreateFileResponseSchema: GenMessage<CreateFileResponse>;
/**
 * @generated from message api.storage.MakeDirectoryRequest
 */
export type MakeDirectoryRequest = Message<"api.storage.MakeDirectoryRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string dir_path = 2;
     */
    dirPath: string;
};
/**
 * Describes the message api.storage.MakeDirectoryRequest.
 * Use `create(MakeDirectoryRequestSchema)` to create a new message.
 */
export declare const MakeDirectoryRequestSchema: GenMessage<MakeDirectoryRequest>;
/**
 * @generated from message api.storage.MakeDirectoryResponse
 */
export type MakeDirectoryResponse = Message<"api.storage.MakeDirectoryResponse"> & {};
/**
 * Describes the message api.storage.MakeDirectoryResponse.
 * Use `create(MakeDirectoryResponseSchema)` to create a new message.
 */
export declare const MakeDirectoryResponseSchema: GenMessage<MakeDirectoryResponse>;
/**
 * @generated from message api.storage.DeleteDirectoryRequest
 */
export type DeleteDirectoryRequest = Message<"api.storage.DeleteDirectoryRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string dir_path = 2;
     */
    dirPath: string;
};
/**
 * Describes the message api.storage.DeleteDirectoryRequest.
 * Use `create(DeleteDirectoryRequestSchema)` to create a new message.
 */
export declare const DeleteDirectoryRequestSchema: GenMessage<DeleteDirectoryRequest>;
/**
 * @generated from message api.storage.DeleteDirectoryResponse
 */
export type DeleteDirectoryResponse = Message<"api.storage.DeleteDirectoryResponse"> & {};
/**
 * Describes the message api.storage.DeleteDirectoryResponse.
 * Use `create(DeleteDirectoryResponseSchema)` to create a new message.
 */
export declare const DeleteDirectoryResponseSchema: GenMessage<DeleteDirectoryResponse>;
/**
 * @generated from message api.storage.DeleteFileRequest
 */
export type DeleteFileRequest = Message<"api.storage.DeleteFileRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string file_path = 2;
     */
    filePath: string;
};
/**
 * Describes the message api.storage.DeleteFileRequest.
 * Use `create(DeleteFileRequestSchema)` to create a new message.
 */
export declare const DeleteFileRequestSchema: GenMessage<DeleteFileRequest>;
/**
 * @generated from message api.storage.DeleteFileResponse
 */
export type DeleteFileResponse = Message<"api.storage.DeleteFileResponse"> & {};
/**
 * Describes the message api.storage.DeleteFileResponse.
 * Use `create(DeleteFileResponseSchema)` to create a new message.
 */
export declare const DeleteFileResponseSchema: GenMessage<DeleteFileResponse>;
/**
 * @generated from message api.storage.WriteFileRequest
 */
export type WriteFileRequest = Message<"api.storage.WriteFileRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string file_path = 2;
     */
    filePath: string;
    /**
     * @generated from field: string content = 3;
     */
    content: string;
};
/**
 * Describes the message api.storage.WriteFileRequest.
 * Use `create(WriteFileRequestSchema)` to create a new message.
 */
export declare const WriteFileRequestSchema: GenMessage<WriteFileRequest>;
/**
 * @generated from message api.storage.WriteFileResponse
 */
export type WriteFileResponse = Message<"api.storage.WriteFileResponse"> & {};
/**
 * Describes the message api.storage.WriteFileResponse.
 * Use `create(WriteFileResponseSchema)` to create a new message.
 */
export declare const WriteFileResponseSchema: GenMessage<WriteFileResponse>;
/**
 * @generated from message api.storage.ReadFileRequest
 */
export type ReadFileRequest = Message<"api.storage.ReadFileRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string file_path = 2;
     */
    filePath: string;
};
/**
 * Describes the message api.storage.ReadFileRequest.
 * Use `create(ReadFileRequestSchema)` to create a new message.
 */
export declare const ReadFileRequestSchema: GenMessage<ReadFileRequest>;
/**
 * @generated from message api.storage.ReadFileResponse
 */
export type ReadFileResponse = Message<"api.storage.ReadFileResponse"> & {
    /**
     * @generated from field: bytes content = 1;
     */
    content: Uint8Array;
};
/**
 * Describes the message api.storage.ReadFileResponse.
 * Use `create(ReadFileResponseSchema)` to create a new message.
 */
export declare const ReadFileResponseSchema: GenMessage<ReadFileResponse>;
/**
 * @generated from message api.storage.ChangeModeRequest
 */
export type ChangeModeRequest = Message<"api.storage.ChangeModeRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string path = 2;
     */
    path: string;
    /**
     * @generated from field: string mode = 3;
     */
    mode: string;
    /**
     * @generated from field: bool recursive = 4;
     */
    recursive: boolean;
};
/**
 * Describes the message api.storage.ChangeModeRequest.
 * Use `create(ChangeModeRequestSchema)` to create a new message.
 */
export declare const ChangeModeRequestSchema: GenMessage<ChangeModeRequest>;
/**
 * @generated from message api.storage.ChangeModeResponse
 */
export type ChangeModeResponse = Message<"api.storage.ChangeModeResponse"> & {};
/**
 * Describes the message api.storage.ChangeModeResponse.
 * Use `create(ChangeModeResponseSchema)` to create a new message.
 */
export declare const ChangeModeResponseSchema: GenMessage<ChangeModeResponse>;
/**
 * @generated from message api.storage.GetFileMetadataRequest
 */
export type GetFileMetadataRequest = Message<"api.storage.GetFileMetadataRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string file_path = 2;
     */
    filePath: string;
};
/**
 * Describes the message api.storage.GetFileMetadataRequest.
 * Use `create(GetFileMetadataRequestSchema)` to create a new message.
 */
export declare const GetFileMetadataRequestSchema: GenMessage<GetFileMetadataRequest>;
/**
 * @generated from message api.storage.GetFileMetadataResponse
 */
export type GetFileMetadataResponse = Message<"api.storage.GetFileMetadataResponse"> & {
    /**
     * @generated from field: uint64 size_byte = 1;
     */
    sizeByte: bigint;
    /**
     * @generated from field: api.storage.FileType type = 2;
     */
    type: FileType;
    /**
     * 文件的MIME类型，例如'text/plain'、'application/json'等
     *
     * @generated from field: string mime = 3;
     */
    mime: string;
    /**
     * @generated from field: uint32 permission = 4;
     */
    permission: number;
    /**
     * @generated from field: bool is_symlink = 5;
     */
    isSymlink: boolean;
};
/**
 * Describes the message api.storage.GetFileMetadataResponse.
 * Use `create(GetFileMetadataResponseSchema)` to create a new message.
 */
export declare const GetFileMetadataResponseSchema: GenMessage<GetFileMetadataResponse>;
/**
 * @generated from message api.storage.GetHomeDirectoryRequest
 */
export type GetHomeDirectoryRequest = Message<"api.storage.GetHomeDirectoryRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
};
/**
 * Describes the message api.storage.GetHomeDirectoryRequest.
 * Use `create(GetHomeDirectoryRequestSchema)` to create a new message.
 */
export declare const GetHomeDirectoryRequestSchema: GenMessage<GetHomeDirectoryRequest>;
/**
 * @generated from message api.storage.GetHomeDirectoryResponse
 */
export type GetHomeDirectoryResponse = Message<"api.storage.GetHomeDirectoryResponse"> & {
    /**
     * @generated from field: string path = 1;
     */
    path: string;
};
/**
 * Describes the message api.storage.GetHomeDirectoryResponse.
 * Use `create(GetHomeDirectoryResponseSchema)` to create a new message.
 */
export declare const GetHomeDirectoryResponseSchema: GenMessage<GetHomeDirectoryResponse>;
/**
 * @generated from message api.storage.MoveRequest
 */
export type MoveRequest = Message<"api.storage.MoveRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string from_path = 2;
     */
    fromPath: string;
    /**
     * @generated from field: string to_path = 3;
     */
    toPath: string;
};
/**
 * Describes the message api.storage.MoveRequest.
 * Use `create(MoveRequestSchema)` to create a new message.
 */
export declare const MoveRequestSchema: GenMessage<MoveRequest>;
/**
 * @generated from message api.storage.MoveResponse
 */
export type MoveResponse = Message<"api.storage.MoveResponse"> & {};
/**
 * Describes the message api.storage.MoveResponse.
 * Use `create(MoveResponseSchema)` to create a new message.
 */
export declare const MoveResponseSchema: GenMessage<MoveResponse>;
/**
 * @generated from message api.storage.ExistsRequest
 */
export type ExistsRequest = Message<"api.storage.ExistsRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string path = 2;
     */
    path: string;
};
/**
 * Describes the message api.storage.ExistsRequest.
 * Use `create(ExistsRequestSchema)` to create a new message.
 */
export declare const ExistsRequestSchema: GenMessage<ExistsRequest>;
/**
 * @generated from message api.storage.ExistsResponse
 */
export type ExistsResponse = Message<"api.storage.ExistsResponse"> & {
    /**
     * @generated from field: bool exists = 1;
     */
    exists: boolean;
};
/**
 * Describes the message api.storage.ExistsResponse.
 * Use `create(ExistsResponseSchema)` to create a new message.
 */
export declare const ExistsResponseSchema: GenMessage<ExistsResponse>;
/**
 * @generated from message api.storage.CopyRequest
 */
export type CopyRequest = Message<"api.storage.CopyRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string from_path = 2;
     */
    fromPath: string;
    /**
     * @generated from field: string to_path = 3;
     */
    toPath: string;
};
/**
 * Describes the message api.storage.CopyRequest.
 * Use `create(CopyRequestSchema)` to create a new message.
 */
export declare const CopyRequestSchema: GenMessage<CopyRequest>;
/**
 * @generated from message api.storage.CopyResponse
 */
export type CopyResponse = Message<"api.storage.CopyResponse"> & {};
/**
 * Describes the message api.storage.CopyResponse.
 * Use `create(CopyResponseSchema)` to create a new message.
 */
export declare const CopyResponseSchema: GenMessage<CopyResponse>;
/**
 * @generated from message api.storage.InitMultipartUploadRequest
 */
export type InitMultipartUploadRequest = Message<"api.storage.InitMultipartUploadRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string path = 2;
     */
    path: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
};
/**
 * Describes the message api.storage.InitMultipartUploadRequest.
 * Use `create(InitMultipartUploadRequestSchema)` to create a new message.
 */
export declare const InitMultipartUploadRequestSchema: GenMessage<InitMultipartUploadRequest>;
/**
 * @generated from message api.storage.InitMultipartUploadResponse
 */
export type InitMultipartUploadResponse = Message<"api.storage.InitMultipartUploadResponse"> & {
    /**
     * @generated from field: string temp_file_dir = 1;
     */
    tempFileDir: string;
    /**
     * @generated from field: uint64 chunk_size_byte = 2;
     */
    chunkSizeByte: bigint;
    /**
     * @generated from field: repeated api.storage.FileInfo files_info = 3;
     */
    filesInfo: FileInfo[];
};
/**
 * Describes the message api.storage.InitMultipartUploadResponse.
 * Use `create(InitMultipartUploadResponseSchema)` to create a new message.
 */
export declare const InitMultipartUploadResponseSchema: GenMessage<InitMultipartUploadResponse>;
/**
 * @generated from message api.storage.UploadRequest
 */
export type UploadRequest = Message<"api.storage.UploadRequest"> & {
    /**
     * @generated from oneof api.storage.UploadRequest.message
     */
    message: {
        /**
         * @generated from field: api.storage.UploadRequest.Info info = 1;
         */
        value: UploadRequest_Info;
        case: "info";
    } | {
        /**
         * @generated from field: bytes chunk = 2;
         */
        value: Uint8Array;
        case: "chunk";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message api.storage.UploadRequest.
 * Use `create(UploadRequestSchema)` to create a new message.
 */
export declare const UploadRequestSchema: GenMessage<UploadRequest>;
/**
 * @generated from message api.storage.UploadRequest.Info
 */
export type UploadRequest_Info = Message<"api.storage.UploadRequest.Info"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string path = 2;
     */
    path: string;
};
/**
 * Describes the message api.storage.UploadRequest.Info.
 * Use `create(UploadRequest_InfoSchema)` to create a new message.
 */
export declare const UploadRequest_InfoSchema: GenMessage<UploadRequest_Info>;
/**
 * @generated from message api.storage.UploadResponse
 */
export type UploadResponse = Message<"api.storage.UploadResponse"> & {
    /**
     * @generated from field: uint64 written_bytes = 1;
     */
    writtenBytes: bigint;
};
/**
 * Describes the message api.storage.UploadResponse.
 * Use `create(UploadResponseSchema)` to create a new message.
 */
export declare const UploadResponseSchema: GenMessage<UploadResponse>;
/**
 * @generated from message api.storage.MergeFileChunksRequest
 */
export type MergeFileChunksRequest = Message<"api.storage.MergeFileChunksRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string path = 2;
     */
    path: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: uint64 size_byte = 4;
     */
    sizeByte: bigint;
};
/**
 * Describes the message api.storage.MergeFileChunksRequest.
 * Use `create(MergeFileChunksRequestSchema)` to create a new message.
 */
export declare const MergeFileChunksRequestSchema: GenMessage<MergeFileChunksRequest>;
/**
 * @generated from message api.storage.MergeFileChunksResponse
 */
export type MergeFileChunksResponse = Message<"api.storage.MergeFileChunksResponse"> & {};
/**
 * Describes the message api.storage.MergeFileChunksResponse.
 * Use `create(MergeFileChunksResponseSchema)` to create a new message.
 */
export declare const MergeFileChunksResponseSchema: GenMessage<MergeFileChunksResponse>;
/**
 * @generated from message api.storage.DownloadRequest
 */
export type DownloadRequest = Message<"api.storage.DownloadRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string path = 2;
     */
    path: string;
    /**
     * @generated from field: uint32 chunk_size_byte = 3;
     */
    chunkSizeByte: number;
};
/**
 * Describes the message api.storage.DownloadRequest.
 * Use `create(DownloadRequestSchema)` to create a new message.
 */
export declare const DownloadRequestSchema: GenMessage<DownloadRequest>;
/**
 * @generated from message api.storage.DownloadResponse
 */
export type DownloadResponse = Message<"api.storage.DownloadResponse"> & {
    /**
     * @generated from field: bytes chunk = 1;
     */
    chunk: Uint8Array;
};
/**
 * Describes the message api.storage.DownloadResponse.
 * Use `create(DownloadResponseSchema)` to create a new message.
 */
export declare const DownloadResponseSchema: GenMessage<DownloadResponse>;
/**
 * @generated from message api.storage.CompressAndDownloadRequest
 */
export type CompressAndDownloadRequest = Message<"api.storage.CompressAndDownloadRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * 需要压缩的文件或目录路径
     *
     * @generated from field: repeated string paths = 2;
     */
    paths: string[];
    /**
     * @generated from field: uint32 chunk_size_byte = 3;
     */
    chunkSizeByte: number;
};
/**
 * Describes the message api.storage.CompressAndDownloadRequest.
 * Use `create(CompressAndDownloadRequestSchema)` to create a new message.
 */
export declare const CompressAndDownloadRequestSchema: GenMessage<CompressAndDownloadRequest>;
/**
 * @generated from message api.storage.CompressAndDownloadResponse
 */
export type CompressAndDownloadResponse = Message<"api.storage.CompressAndDownloadResponse"> & {
    /**
     * @generated from field: bytes chunk = 1;
     */
    chunk: Uint8Array;
};
/**
 * Describes the message api.storage.CompressAndDownloadResponse.
 * Use `create(CompressAndDownloadResponseSchema)` to create a new message.
 */
export declare const CompressAndDownloadResponseSchema: GenMessage<CompressAndDownloadResponse>;
/**
 * @generated from message api.storage.CompressFilesRequest
 */
export type CompressFilesRequest = Message<"api.storage.CompressFilesRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * 需压缩的文件路径
     *
     * @generated from field: repeated string paths = 2;
     */
    paths: string[];
    /**
     * 目标压缩文件路径
     *
     * @generated from field: string archive_path = 3;
     */
    archivePath: string;
};
/**
 * Describes the message api.storage.CompressFilesRequest.
 * Use `create(CompressFilesRequestSchema)` to create a new message.
 */
export declare const CompressFilesRequestSchema: GenMessage<CompressFilesRequest>;
/**
 * @generated from message api.storage.CompressFilesResponse
 */
export type CompressFilesResponse = Message<"api.storage.CompressFilesResponse"> & {};
/**
 * Describes the message api.storage.CompressFilesResponse.
 * Use `create(CompressFilesResponseSchema)` to create a new message.
 */
export declare const CompressFilesResponseSchema: GenMessage<CompressFilesResponse>;
/**
 * @generated from message api.storage.DecompressFileRequest
 */
export type DecompressFileRequest = Message<"api.storage.DecompressFileRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * 需要解压缩的文件路径
     *
     * @generated from field: string file_path = 2;
     */
    filePath: string;
    /**
     * 目标解压缩文件路径
     *
     * @generated from field: string decompression_path = 3;
     */
    decompressionPath: string;
};
/**
 * Describes the message api.storage.DecompressFileRequest.
 * Use `create(DecompressFileRequestSchema)` to create a new message.
 */
export declare const DecompressFileRequestSchema: GenMessage<DecompressFileRequest>;
/**
 * @generated from message api.storage.DecompressFileResponse
 */
export type DecompressFileResponse = Message<"api.storage.DecompressFileResponse"> & {};
/**
 * Describes the message api.storage.DecompressFileResponse.
 * Use `create(DecompressFileResponseSchema)` to create a new message.
 */
export declare const DecompressFileResponseSchema: GenMessage<DecompressFileResponse>;
/**
 * @generated from message api.storage.TransferInfo
 */
export type TransferInfo = Message<"api.storage.TransferInfo"> & {
    /**
     * @generated from field: string to_cluster = 1;
     */
    toCluster: string;
    /**
     * @generated from field: string file_path = 2;
     */
    filePath: string;
    /**
     * 单位为KB，B：Byte
     *
     * @generated from field: uint64 transfer_size_kb = 3;
     */
    transferSizeKb: bigint;
    /**
     * @generated from field: uint32 progress = 4;
     */
    progress: number;
    /**
     * @generated from field: float speed_k_bps = 5;
     */
    speedKBps: number;
    /**
     * @generated from field: uint64 remaining_time_seconds = 6;
     */
    remainingTimeSeconds: bigint;
};
/**
 * Describes the message api.storage.TransferInfo.
 * Use `create(TransferInfoSchema)` to create a new message.
 */
export declare const TransferInfoSchema: GenMessage<TransferInfo>;
/**
 * @generated from message api.storage.StartFileTransferRequest
 */
export type StartFileTransferRequest = Message<"api.storage.StartFileTransferRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string to_transfer_node_host = 2;
     */
    toTransferNodeHost: string;
    /**
     * @generated from field: string to_transfer_node_port = 3;
     */
    toTransferNodePort: string;
    /**
     * @generated from field: string from_path = 4;
     */
    fromPath: string;
    /**
     * @generated from field: string to_path = 5;
     */
    toPath: string;
};
/**
 * Describes the message api.storage.StartFileTransferRequest.
 * Use `create(StartFileTransferRequestSchema)` to create a new message.
 */
export declare const StartFileTransferRequestSchema: GenMessage<StartFileTransferRequest>;
/**
 * @generated from message api.storage.StartFileTransferResponse
 */
export type StartFileTransferResponse = Message<"api.storage.StartFileTransferResponse"> & {};
/**
 * Describes the message api.storage.StartFileTransferResponse.
 * Use `create(StartFileTransferResponseSchema)` to create a new message.
 */
export declare const StartFileTransferResponseSchema: GenMessage<StartFileTransferResponse>;
/**
 * @generated from message api.storage.QueryFileTransferRequest
 */
export type QueryFileTransferRequest = Message<"api.storage.QueryFileTransferRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
};
/**
 * Describes the message api.storage.QueryFileTransferRequest.
 * Use `create(QueryFileTransferRequestSchema)` to create a new message.
 */
export declare const QueryFileTransferRequestSchema: GenMessage<QueryFileTransferRequest>;
/**
 * @generated from message api.storage.QueryFileTransferResponse
 */
export type QueryFileTransferResponse = Message<"api.storage.QueryFileTransferResponse"> & {
    /**
     * @generated from field: repeated api.storage.TransferInfo transfer_infos = 1;
     */
    transferInfos: TransferInfo[];
};
/**
 * Describes the message api.storage.QueryFileTransferResponse.
 * Use `create(QueryFileTransferResponseSchema)` to create a new message.
 */
export declare const QueryFileTransferResponseSchema: GenMessage<QueryFileTransferResponse>;
/**
 * @generated from message api.storage.TerminateFileTransferRequest
 */
export type TerminateFileTransferRequest = Message<"api.storage.TerminateFileTransferRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string to_transfer_node_host = 2;
     */
    toTransferNodeHost: string;
    /**
     * @generated from field: string from_path = 3;
     */
    fromPath: string;
};
/**
 * Describes the message api.storage.TerminateFileTransferRequest.
 * Use `create(TerminateFileTransferRequestSchema)` to create a new message.
 */
export declare const TerminateFileTransferRequestSchema: GenMessage<TerminateFileTransferRequest>;
/**
 * @generated from message api.storage.TerminateFileTransferResponse
 */
export type TerminateFileTransferResponse = Message<"api.storage.TerminateFileTransferResponse"> & {};
/**
 * Describes the message api.storage.TerminateFileTransferResponse.
 * Use `create(TerminateFileTransferResponseSchema)` to create a new message.
 */
export declare const TerminateFileTransferResponseSchema: GenMessage<TerminateFileTransferResponse>;
/**
 * @generated from message api.storage.CheckTransferKeyRequest
 */
export type CheckTransferKeyRequest = Message<"api.storage.CheckTransferKeyRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: string to_transfer_node_host = 2;
     */
    toTransferNodeHost: string;
    /**
     * @generated from field: string to_transfer_node_port = 3;
     */
    toTransferNodePort: string;
};
/**
 * Describes the message api.storage.CheckTransferKeyRequest.
 * Use `create(CheckTransferKeyRequestSchema)` to create a new message.
 */
export declare const CheckTransferKeyRequestSchema: GenMessage<CheckTransferKeyRequest>;
/**
 * @generated from message api.storage.CheckTransferKeyResponse
 */
export type CheckTransferKeyResponse = Message<"api.storage.CheckTransferKeyResponse"> & {};
/**
 * Describes the message api.storage.CheckTransferKeyResponse.
 * Use `create(CheckTransferKeyResponseSchema)` to create a new message.
 */
export declare const CheckTransferKeyResponseSchema: GenMessage<CheckTransferKeyResponse>;
/**
 * @generated from enum api.storage.FileType
 */
export declare enum FileType {
    /**
     * @generated from enum value: FILE = 0;
     */
    FILE = 0,
    /**
     * @generated from enum value: DIR = 1;
     */
    DIR = 1
}
/**
 * Describes the enum api.storage.FileType.
 */
export declare const FileTypeSchema: GenEnum<FileType>;
/**
 * @generated from service api.storage.FileService
 */
export declare const FileService: GenService<{
    /**
     * @generated from rpc api.storage.FileService.Copy
     */
    copy: {
        methodKind: "unary";
        input: typeof CopyRequestSchema;
        output: typeof CopyResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.Move
     */
    move: {
        methodKind: "unary";
        input: typeof MoveRequestSchema;
        output: typeof MoveResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.Exists
     */
    exists: {
        methodKind: "unary";
        input: typeof ExistsRequestSchema;
        output: typeof ExistsResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.ReadDirectory
     */
    readDirectory: {
        methodKind: "unary";
        input: typeof ReadDirectoryRequestSchema;
        output: typeof ReadDirectoryResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.MakeDirectory
     */
    makeDirectory: {
        methodKind: "unary";
        input: typeof MakeDirectoryRequestSchema;
        output: typeof MakeDirectoryResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.DeleteDirectory
     */
    deleteDirectory: {
        methodKind: "unary";
        input: typeof DeleteDirectoryRequestSchema;
        output: typeof DeleteDirectoryResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.CreateFile
     */
    createFile: {
        methodKind: "unary";
        input: typeof CreateFileRequestSchema;
        output: typeof CreateFileResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.DeleteFile
     */
    deleteFile: {
        methodKind: "unary";
        input: typeof DeleteFileRequestSchema;
        output: typeof DeleteFileResponseSchema;
    };
    /**
     * 写入文件大小限制为 10 MB，上传更大文件考虑使用分片上传相关接口
     *
     * @generated from rpc api.storage.FileService.WriteFile
     */
    writeFile: {
        methodKind: "unary";
        input: typeof WriteFileRequestSchema;
        output: typeof WriteFileResponseSchema;
    };
    /**
     * 读取文件大小限制为 10 MB，读取更大文件考虑使用 Download 接口
     *
     * @generated from rpc api.storage.FileService.ReadFile
     */
    readFile: {
        methodKind: "unary";
        input: typeof ReadFileRequestSchema;
        output: typeof ReadFileResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.ChangeMode
     */
    changeMode: {
        methodKind: "unary";
        input: typeof ChangeModeRequestSchema;
        output: typeof ChangeModeResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.Download
     */
    download: {
        methodKind: "server_streaming";
        input: typeof DownloadRequestSchema;
        output: typeof DownloadResponseSchema;
    };
    /**
     * 下载并压缩，将压缩数据以流的方式返回
     *
     * @generated from rpc api.storage.FileService.CompressAndDownload
     */
    compressAndDownload: {
        methodKind: "server_streaming";
        input: typeof CompressAndDownloadRequestSchema;
        output: typeof CompressAndDownloadResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.InitMultipartUpload
     */
    initMultipartUpload: {
        methodKind: "unary";
        input: typeof InitMultipartUploadRequestSchema;
        output: typeof InitMultipartUploadResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.Upload
     */
    upload: {
        methodKind: "client_streaming";
        input: typeof UploadRequestSchema;
        output: typeof UploadResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.MergeFileChunks
     */
    mergeFileChunks: {
        methodKind: "unary";
        input: typeof MergeFileChunksRequestSchema;
        output: typeof MergeFileChunksResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.CompressFiles
     */
    compressFiles: {
        methodKind: "unary";
        input: typeof CompressFilesRequestSchema;
        output: typeof CompressFilesResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.DecompressFile
     */
    decompressFile: {
        methodKind: "unary";
        input: typeof DecompressFileRequestSchema;
        output: typeof DecompressFileResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.GetFileMetadata
     */
    getFileMetadata: {
        methodKind: "unary";
        input: typeof GetFileMetadataRequestSchema;
        output: typeof GetFileMetadataResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.GetHomeDirectory
     */
    getHomeDirectory: {
        methodKind: "unary";
        input: typeof GetHomeDirectoryRequestSchema;
        output: typeof GetHomeDirectoryResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.StartFileTransfer
     */
    startFileTransfer: {
        methodKind: "unary";
        input: typeof StartFileTransferRequestSchema;
        output: typeof StartFileTransferResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.QueryFileTransfer
     */
    queryFileTransfer: {
        methodKind: "unary";
        input: typeof QueryFileTransferRequestSchema;
        output: typeof QueryFileTransferResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.TerminateFileTransfer
     */
    terminateFileTransfer: {
        methodKind: "unary";
        input: typeof TerminateFileTransferRequestSchema;
        output: typeof TerminateFileTransferResponseSchema;
    };
    /**
     * @generated from rpc api.storage.FileService.CheckTransferKey
     */
    checkTransferKey: {
        methodKind: "unary";
        input: typeof CheckTransferKeyRequestSchema;
        output: typeof CheckTransferKeyResponseSchema;
    };
}>;
//# sourceMappingURL=file_pb.d.ts.map