import { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const definition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'Files API',
    version: '1.0.0',
  },
  components:{
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer"
      }
    },
    schemas: {
      File: {
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
    }
  },
}

export const options : OAS3Options = {
  definition,
  apis: ['./src/routes/*.ts'], 
};