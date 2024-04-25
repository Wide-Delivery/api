import express, {Express, NextFunction, Request, Response} from "express";
import dotenv from "dotenv";
dotenv.config();

import { initRouter } from "./router";
import bodyParser from "body-parser";
import initPassport from "../utils/passport";

import { ValidationError } from 'express-validation';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
initPassport(app);

initRouter(app);
app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server!");
});

// TODO separate to another file


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err);
    }

    const response = {
        status: 'error',
        message: 'Internal Server Error',
        details: undefined
    };

    if (process.env.NODE_ENV === 'development') {
        response.details = err.message;
    }

    return res.status(500).json(response);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
