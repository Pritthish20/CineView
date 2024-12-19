import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,  
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
     // Click 'View API Keys' above to copy your API secret
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


// (async function() {
  
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
    
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });
    
//     console.log(autoCropUrl);    
// })();


export {uploadFile};