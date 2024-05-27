import { check, validationResult } from "express-validator";

const validate_results = (req: any, res: any, next: any)=>{
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        res.status(403);
        res.send({errors: error.array()});
    }
}

export const postValidator = [
    check('title').custom(
        value=>{
            if(!value){
                throw new Error('se requiere el titulo');
            }else if(value.length <= 0 || value.length > 50){
                throw new Error('El titulo debe contener entre 1 y 50 caracteres');
            }
            return true;
        }
    ),
    (req: any, res: any, next: any) => validate_results(req, res, next)
];