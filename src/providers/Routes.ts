/**
 * Define all your routes
 */

import { Application } from "express";

import apiRouter from "./../routes/Api";

class Routes {

    public mountApi(express: Application): Application {
        const apiPrefix = "api";

        return express.use(`/${apiPrefix}`, apiRouter);
    }
}

export default new Routes();
