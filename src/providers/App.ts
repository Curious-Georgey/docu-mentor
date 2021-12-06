/**
 * Primary file for your Clustered API Server
 */

import * as path from "path";

import Express from "./Express";

import bodyParser from "body-parser";
import { Application } from "express";

class App {
    public application: Application;

    public loadServer(): void {
        this.application = Express.init();
    }
}

export default new App();
