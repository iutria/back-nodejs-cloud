import {Router} from "express";
import { 
    postFileController, 
    deleteFileController, 
    getFileController, 
    getFilesController, 
    putFileController 
} from "../controllers/file.controller";
import { upload } from "../utils/multer.util";
import { postValidator } from "../validators/post.validator";

const router = Router();

router.get('/files', getFilesController);
router.get('/files/:id', getFileController);
router.post('/files', upload.single('file'), postFileController);
router.put('/files/:id', putFileController);
router.delete('/files/:id', deleteFileController);

export default router;