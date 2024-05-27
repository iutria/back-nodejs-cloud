import { Schema } from "swagger-jsdoc";

export const File: Schema = {
    type: "object",
    properties: {
        id: {
            type: "integer",
            format: "int64",
        },
        title: {
            type: "string",
        },
        description: {
            type: "string",
        },
        ext: {
            type: "string",
        },
        url: {
            type: "string",
        }
    },
}