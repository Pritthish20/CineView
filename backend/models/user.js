import { MongoOIDCError } from "mongodb";
import mongoose from "mongoose";
import { timestamp } from "rxjs";

const userShema=mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
        },

        email:{
            type:String,
            required:true,
            unique:true,
        },

        password:{
            type:String,
            required:true,

        },

        isAdmin:{
            type:Boolean,
            required:true,
            default:false,
        },

    },
    {timestamp:true}
);

const User=mongoose.model("User",userShema); 
export default User;