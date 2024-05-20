import {Router} from "express";
import { 
    postFileController, 
    deleteFileController, 
    getFileController, 
    getFilesController, 
    putFileController 
} from "../controllers/file.controller";
import { upload } from "../utils/multer.util";

const router = Router();

/**
 * Get Files
 * @openapi
 * /api/files:
 *      get:
 *          tags:
 *              - users
 *          summary: ""
 *          description: ""
 *          responses:
 *              '200':
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/File"
 */
router.get('/files', getFilesController);
router.get('/files/:id', getFileController);
/**
 * POST Files
 * @openapi
 * /api/files:
 *      post:
 *          tags:
 *              - users
 *          summary: ""
 *          description: ""
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/File"
 */
router.post('/files', upload.single('file'), postFileController);
router.put('/files/:id', putFileController);
router.delete('/files/:id', deleteFileController);

export default router;