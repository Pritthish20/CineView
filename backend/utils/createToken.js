import jwt from "jsonwebtoken";

const generateToken=(res,userId)=> {
    const token =jwt.sign({userId},process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
    // console.log("Token generated",token);
    // set jwt as http-only cookie
    res.cookie("jwt",token,{
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 30*24*60*60*1000,
    });

    return token;
};
export default generateToken;