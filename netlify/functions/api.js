// YOUR_BASE_DIRECTORY/netlify/functions/api.js

import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/", (req, res) => res.send("Hello World!"));

// api.use("/api/", router);
api.use("/", router);

export const handler = serverless(api);
