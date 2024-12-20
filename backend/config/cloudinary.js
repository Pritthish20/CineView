import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,  
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
});


const uploadFile = async(filePath) =>{
    try {
        const res=await cloudinary.uploader.upload(filePath,{
            folder:'CineView',
            width:1080,
            height:1620,
            aspect_ratio: "2:3",
            crop:"fill",
            gravity:"auto",
            allowed_formats:['png','jpg','jpeg', 'svg'],
            quality: "auto",
            format: "auto"
        }
        );
        // console.log(res);
        return res;
        
    } catch (error) {
        console.log("Cloudinary Upload failed",error.message);
    }


 }


export {uploadFile};