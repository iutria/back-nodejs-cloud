import { OAS3Definition } from "swagger-jsdoc";
import { File } from "./schemas/File";
import { PostFile } from "./schemas/PostFile";
import { postFiles } from "./paths/files/post.path";
import { getFiles } from "./paths/files/getAll.path";
import { getOneFile } from "./paths/files/getOne.path";
import { deleteFile } from "./paths/files/delete.path";
import { putFiles } from "./paths/files/put.path";
import { id } from "./parameters/id.parameter";

export const definition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'Files API',
    version: '1.0.0',
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: 'JWT'
      }
    },
    parameters: {
      id
    },
    schemas: {
      File,
      PostFile
    }
  },
  paths: {
    '/api/files': {
      get: getFiles,
      post: postFiles
    },
    '/api/files/{id}': {
      get: getOneFile,
      delete: deleteFile,
      put: putFiles,
    },
  }
}
