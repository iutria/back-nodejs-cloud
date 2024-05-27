import { Operation, Parameter } from "swagger-jsdoc";

export const getOneFile: Operation = {
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
            description: '',
            content: {
                'application/json': {
                    schema: {
                        type: 'string',
                        $ref: '#/components/schemas/File',
                    },
                },
            }
        }
    }
}