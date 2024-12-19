import path from "path";
import express from "express";
import multer from "multer";
import {uploadFile} from "../config/cloudinary.js";

const router = express.Router();

//upload path

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${extname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g||image\/png||image\/webp/;

  const extname = path.extname(file.originalname);
  const mimetype = file.mimetype;

  if (filetypes.test(extname) && mimetypes.test(mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Images only"), false);
  }
};

const upload = multer({ storage, fileFilter });
// const uploadSingleImage = upload.single("image");

router.post("/", upload.single("image"),async (req, res) => {
   try {

    if(!req.file){
      res.status(400).send({message: "No Image Provided"});
    }

    const result=await uploadFile(req.file.path)

    // console.log(result);

    res.status(201).send({
      message: "Image Upload Successfully",
      image:result.secure_url,
    })


    
   } catch (error) {
    res.status(500).send({message:"Image upload failed",error:error.message});
   }
  });

export default router;