import  jwt from "jsonwebtoken";
import User from '../models/user.js';
import asyncHandler from "./asyncHandler.js";

//check
const authenticate = asyncHandler(async(req,res,next)=>{
    let token;
    token=req.cookies.jwt;
    if(token){
        try {
            //const { password, user } = User._doc
            const decode=jwt.verify(token,process.env.JWT_SECRET);
            req.user=await User.findById(decode.userId).select("-password");
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token is invalid");
        }
    }else{
        res.status(401);
        throw new Error("Not authorized, no token found");
    }
});

const authenticateAsAdmin =asyncHandler(async(req,res,next)=>{
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(401).send("Not authorized as an Admin");
    }
});
export {authenticate,authenticateAsAdmin};