import express from "express"
import { Router } from "express"
import { generatethumbnails } from "../services/ai.service";

const thumnailGenerator = async (req: Request, res: Response) => {

    //@ts-ignore
    const { user_prompt, aspectRatio } = req.body;

    if (!prompt) {
        return;
    }




    return res.status(200).json({
        success: true,
        data: {
            image: base64,
            type: mimeType
        }
    });





}
