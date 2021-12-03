
/**
 * Define all your API web-routes
 */
import { Express } from "express";
import { Router } from "express";

import BoardsController from "../controllers/Boards";

class API {
    public static mountRoutes(app: Express): void {
        app.get("/", (req, res) => res.status(200).send({message: "hi"}));

        app.get("/boards", BoardsController.index);
        app.post("/boards", BoardsController.create);
    }
}

export default API;
