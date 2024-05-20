import {Router} from "express";
import info from './info.route'
import FileRoute from './file.route'

const router = Router();

router.use(FileRoute)
router.use(info)

export default router;