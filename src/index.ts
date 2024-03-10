import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import { initRouter } from "./router";
import bodyParser from "body-parser";
import initPassport from "../utils/passport";


const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
initPassport(app);

initRouter(app);
app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server!");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
