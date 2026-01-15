import express from "express"
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env") })

import { thumbnailGenerator } from "./controllers/generateimage.controller"
import { thumbnailRouter } from "./routes/thumbnail.routes";

const app = express();
app.use(express.json())

app.use("/api/thumbnail", thumbnailRouter)


app.listen(3000) 