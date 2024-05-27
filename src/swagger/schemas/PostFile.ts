import { Schema } from "swagger-jsdoc";

export const PostFile: Schema = {
    type: "object",
    required: ['file', 'title'],
    properties: {
        title: {
            type: "string",
        },
        description: {
            type: "string",
        },
        file: {
            type: "string",
            format: 'binary'
        }
    },
}