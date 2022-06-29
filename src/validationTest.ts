import { validationResult } from "express-validator";

export function validationTest (req, res){
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {

        if(req.body.phone){
            console.log(errors.mapped().phone.msg)

            return res.status(400).json({ errors: errors.array() });
        }
        
        if(!req.body.id){
            return res.status(400).json({ errors: errors.mapped().id });
        }

    }
}