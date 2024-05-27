import S3 from '../config/aws.config';
import fs from 'fs';

export const saveFile = async(params: any, path: any) : Promise<string>=>{
    const promise = new Promise<string>(
        (resolve, reject) => S3.upload(
            {
                Bucket: `${process.env.BUCKET}`,
                ...params
            }, 
            (err: any, data: any) => {
                if(path){
                    fs.unlink(path, (err) => {})
                }
                if (err) {
                    reject('error');
                } else {
                    resolve(data.Location)
                }
            }
        )
    );

    const resp = await promise;

    if(resp=='error'){
        throw 'Error al guardar la imagen';
    }else{
        return resp;
    }
}

export const deleteFile = async(name: string) : Promise<void>=>{
    const promise = new Promise<string>(
        (resolve, reject) => S3.deleteObject(
            {
                Bucket: `${process.env.BUCKET}`,
                Key: name
            }, 
            (err: any, data: any) => {
                if (err) {
                    reject('error');
                } else {
                    resolve(data)
                }
            }
        )
    );

    const resp = await promise;

    if(resp=='error'){
        throw 'Error al borrar la imagen';
    }
}