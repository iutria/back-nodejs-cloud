import { Operation, Parameter } from "swagger-jsdoc";

export const deleteFile: Operation = {
    tags: ['Files'],
    summary: '',
    description: '',
    parameters: [
        {
            $ref: "#/components/parameters/id"
        }
    ],
    responses: {
        '200': {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string'
                            }
                        }
                    },
                },
            }
        }
    }
}