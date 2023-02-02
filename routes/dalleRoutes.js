import express from "express";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
dotenv.config();
const router = express.Router();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const ai = new OpenAIApi(configuration);
router.get("/", (req, res) => {
  res.send("Hello from dalle");
});
router.post("/generate", async (request, response) => {
  try {
    const { prompt } = request.body;

    const ai_response = await ai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = ai_response.data.data[0].b64_json;
    response.status(200).json({ photo: image });
  } catch (error) {
    // response.status(500).send(error?.data.error.message);
    response.status(404).send(error);
  }
});
export default router;
