import PostSchema from "../models/Post.js";
import express from "express";
import { v2 as cloudConfig } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
cloudConfig.config({
  cloud_name: process.env.CLOUDYNARY_CLOUD_NAME,
  api_key: process.env.CLOUDYNARY_API_KEY,
  api_secret: process.env.CLOUDYNARY_SECRET,
});

router.get("/", async (req, res) => {
 try {
  const allPosts = await PostSchema.find();
  res.status(200).send(allPosts)
 } catch (error) {
  res.status(500).send(error.message)
 }
});

router.post("/", async (req, res) => { 
  try {
    const imageUrl = await cloudConfig.uploader.upload(req.body.image)
    const savedPost =  PostSchema.create({
      name:req.body.name,
      prompt:req.body.prompt,
      image:imageUrl.url,
    });
    res.status(200).send({ success: true, data: savedPost });
  } catch (error) {
    res.status(500).send(error);
  }
}
);

export default router;
