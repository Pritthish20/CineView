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
            width:"1016",
            height:"686",
            allowed_formats:['png','jpg','jpeg', 'svg']
        }
        );
        // console.log(res);
        return res;
        
    } catch (error) {
        console.log("Cloudinary Upload failed",error.message);
    }


 }


export {uploadFile};