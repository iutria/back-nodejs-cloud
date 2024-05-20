import db from "../config/mysql.config"
import { File } from "../models/File"

const TABLE_NAME = 'files'

export const getFilesRepository = async() : Promise<File[]> => {
    return await db.query(`SELECT * FROM ${TABLE_NAME}`)
    .then(
        (values)=>{
            const [data] = values;
            return data as File[];
        }
    ).catch(
        (e)=>{
            throw e;
        }
    )
}

export const getFileRepository = async(id: string) : Promise<File> => {
    return await db.query(`SELECT * FROM ${TABLE_NAME} where id = ?`,[id])
    .then(
        (values)=>{
            const data = values[0][0];
            return data;
        }
    ).catch(
        (e)=>{
            throw e;
        }
    )
}

export const addFileRepository = async(file : File)=>{
    return await db.query(
        `INSERT INTO ${TABLE_NAME}(TITLE, DESCRIPTION, EXT, URL) 
        VALUES (?,?,?,?)`,
        [file.title, file.description, file.ext, file.url ]
    ).then(
        (value)=>{
            file.id = value[0]['insertId'];
            return file;
        }
    ).catch(
        (e)=>{
            throw e;
        }
    )
}

export const updateFileRepository = async(file : File, id: string)=>{
    return await db.query(
        `UPDATE ${TABLE_NAME} SET TITLE=?, EXT = ?, DESCRIPTION = ?
        WHERE ID=?`,
        [file.title ?? '', file.description ?? '', file.ext ?? '', id]
    ).catch(
        (e)=>{
            throw e;
        }
    )
}

export const deleteFileRepository = async(id: string)=>{
    return await db.query(
        `DELETE FROM ${TABLE_NAME} WHERE ID=?`,
        [id]
    ).catch(
        (e)=>{
            throw e;
        }
    )
}