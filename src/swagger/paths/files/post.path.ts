import { Operation } from "swagger-jsdoc";

export const postFiles: Operation = {
    tags: ['Files'],
    summary: '',
    description: '',
    requestBody: {
        content: {
            'multipart/form-data': {
                schema: {
                    $ref: '#/components/schemas/PostFile'
                }
            }
        }
    },
    responses: {
        '200': {
            description: '',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/File',
                    },
                },
            }
        }
    },
}