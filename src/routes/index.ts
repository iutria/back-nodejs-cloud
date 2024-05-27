import {Router} from "express";
import FileRoute from './file.route'

const router = Router();

router.use(FileRoute)

export default router;