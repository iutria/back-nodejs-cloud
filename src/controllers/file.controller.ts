import { Request, Response } from "express";
import { File } from "../models/File";
import fs from 'fs';
import path from 'path';
import { addFileRepository, deleteFileRepository, getFileRepository, getFilesRepository, updateFileRepository } from "../repository/file.repository";
import { deleteFile, saveFile } from "../repository/s3.repository";

export const getFilesController = async(req: Request, res: Response)=>{
    try {
        const files : File[] = await getFilesRepository();
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const getFileController = async(req: Request, res: Response)=>{
    try {
        const fileId : string = req.params.id;
        const file : File = await getFileRepository(fileId);
        res.status(200).json(file);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const postFileController = async(req: Request, res: Response)=>{    
    try {
        //@ts-ignore
        const reqFile = req.file;
        const file = fs.createReadStream(reqFile.path);
        const ext = path.extname(reqFile.originalname);

        const params = {
            Key: req.body.title + ext,
            Body: file
        };

        const url = await saveFile(params, reqFile.path);
        const data : File = req.body;
        data.ext = ext;
        data.url = url;
        const resp : File = await addFileRepository(data);
        res.status(200).json({message: 'agregado correctamente', data: resp});
    } catch (error) {
        res.status(500).json(error);
    }    
}

export const putFileController = async(req: Request, res: Response)=>{
    try {
        const id : string = req.params.id
        const file : File = req.body;
        await updateFileRepository(file, id);
        res.status(200).json({message: 'Modificado correctamente'});
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteFileController = async(req: Request, res: Response)=>{
    try {
        const id : string = req.params.id;
        const file = await getFileRepository(id);
        if(!file){
            res.status(404).json({message: 'Archivo no encontrado'});
            return;
        }
        await deleteFile(file.title+file.ext);
        await deleteFileRepository(id);
        res.status(200).json({message: 'Eliminado correctamente'});
    } catch (error) {
        res.status(500).json(error);
    }
}