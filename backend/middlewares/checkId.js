import { isValidObjectId } from "mongoose";
 
const checkId =(req,res,next)=>{
    if(!isValidObjectId(req.params.id)){
        req.status(404);
        throw new Error(`Invalid Object of : ${req.params.id}`);
    }
    next();
}

export default checkId;