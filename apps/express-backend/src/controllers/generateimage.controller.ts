import express from "express"
import { Router, Request, Response } from "express"
import { generatethumbnails } from "../services/ai.service";

export const thumbnailGenerator = async (req: Request, res: Response) => {


    const { user_prompt, aspectRatio } = req.body;

    if (!user_prompt) {
        return res.status(400).json({ error: "prompt not given" });
    }

    const { base64, mimeType } = await generatethumbnails({ user_prompt, aspectRatio })

    return res.status(200).json({
        success: true,
        data: {
            imageB64: base64,
            contentType: mimeType,
            dataUrl: `data:${mimeType};base64,${base64}`
        }
    });









}
