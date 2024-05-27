import { Parameter } from "swagger-jsdoc";

export const id: Parameter = {
    name: 'id',
    in: 'path',
    required: true,
    schema: {
        type: 'integer',
        format: 'int64',
    },
}