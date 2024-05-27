import { options } from "./swagger.options";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app: any) => {
    app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
  
export default setupSwagger;
  