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
}>;
//# sourceMappingURL=file_pb.d.ts.map