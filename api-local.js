// YOUR_BASE_DIRECTORY/netlify/functions/api.js

import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

// const router = Router();
api.get("/", (req, res) => res.send("Hello World!"));

// api.use("/api/", router);

// export const handler = serverless(api);
api.listen(3000);

