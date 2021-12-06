/**
 * Primary file for your Clustered API Server
 */

import * as path from "path";

import Express from "./Express";

import { Application } from "express";
import bodyParser from "body-parser";

class App {
    application: Application;

    public loadServer(): void {
        this.application = Express.init();
    }
}

export default new App();