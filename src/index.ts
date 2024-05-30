import express, {Express, NextFunction, Request, Response} from "express";
import dotenv from "dotenv";
dotenv.config();

import { initRouter } from "./router";
import bodyParser from "body-parser";
import initPassport from "../utils/passport";
import httpReqLogger from "../logger";
import errorHandler from "./middleware/error-handler";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server!");
});

// TODO separate to another file

initPassport(app);

initRouter(app);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
