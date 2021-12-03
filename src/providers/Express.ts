/**
 * Primary file for your Clustered API Server
 */

import express from "express";

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
        this.express = express();

        this.mountRoutes();
    }

    /**
     * Starts the express server
     */
    public init(): any {
        const port = 3000;
        // Start the server on the specified port
        this.express.listen(port, () => {

            return console.log("\x1b[33m%s\x1b[0m", `Server :: Running @ 'http://localhost:${port}'`);
        });
    }

    /**
     * Mounts all the defined routes
     */
    private mountRoutes(): void {
        this.express = Routes.mountApi(this.express);
    }
}

/** Export the express module */
export default new Express();
