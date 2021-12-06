/**
 * Primary file for your Clustered API Server
 */

import bodyParser from "body-parser";
import express, { Application } from "express";

import Routes from "./Routes";

class Express {
    /**
     * Create the express object
     */
    public express: express.Application;

    /**
     * Initializes the express server
     */
    constructor() {
        console.log('ExpressProvider::constructor');
        this.express = express();

        this.mountMiddleware();
        this.mountRoutes();
    }

    /**
     * Starts the express server
     */
    public init(): Application {
        console.log('ExpressProvider::init');
        const port = 3000;

        // Start the server on the specified port
        this.express.listen(port, () => {
            return console.log("\x1b[33m%s\x1b[0m", `Server :: Running @ 'http://localhost:${port}'`);
        });

        return this.express;
    }

    /**
     * Mounts all the defined routes
     */
    private mountRoutes(): void {
        console.log('ExpressProvider::mountRoutes');
        this.express = Routes.init(this.express);
    }

    private mountMiddleware() {
        console.log('ExpressProvider::mountMiddleware');
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
}

/** Export the express module */
export default new Express();
