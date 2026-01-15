import express from "express";
import { Router } from "express"
import { thumbnailGenerator } from "../controllers/generateimage.controller";



export const thumbnailRouter: Router = Router();

thumbnailRouter.post('/create', thumbnailGenerator)



