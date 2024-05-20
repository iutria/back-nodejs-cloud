import {Router} from "express";

const router = Router();

router.get('/info', (req, res)=>{
    res.json({
        port: process.env.PORT ?? null,
        conn: process.env.CONNECTION_URI
    })
});

export default router;