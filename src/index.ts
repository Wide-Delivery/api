import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import { initRouter } from "./router";
import {initServices} from "./services/init-services";
import bodyParser from "body-parser";


const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())

// const allServices = initServices()
//     .then(() => console.info('[All services started successfully]'))
//     .catch(err => console.error(`Some services hasn't beed started`));
// initRouter(app, allServices);

initServices()
    .then(allServices => {
        console.info('[All services started successfully]');
        initRouter(app, allServices);
        app.get("/", (req: Request, res: Response) => {
            res.send("Express + TypeScript Server 2!");
        });

        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error(`Some services haven't been started`);
        console.error(err);
    });

// app.get("/", (req: Request, res: Response) => {
//     res.send("Express + TypeScript Server 2!");
// });
//
// app.listen(port, () => {
//     console.log(`[server]: Server is running at http://localhost:${port}`);
// });
