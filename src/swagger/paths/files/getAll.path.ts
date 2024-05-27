import { Operation } from "swagger-jsdoc";

export const getFiles: Operation = {
    tags: ['Files'],
    summary: '',
    description: '',
    responses: {
        '200': {
            description: '',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/File'
                        },
                    },
                },
            }
        }
    }
}