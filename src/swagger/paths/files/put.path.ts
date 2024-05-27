import { Operation } from "swagger-jsdoc";

export const putFiles: Operation = {
    tags: ['Files'],
    summary: '',
    description: '',
    parameters: [
        {
            $ref: "#/components/parameters/id"
        }
    ],
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