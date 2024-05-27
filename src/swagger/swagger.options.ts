import { OAS3Options } from "swagger-jsdoc";
import { definition } from "./swagger.definitions";

export const options: OAS3Options = {
    definition,
    apis: ['./src/routes/*.ts'],
};