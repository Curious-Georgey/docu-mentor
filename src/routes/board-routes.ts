
/**
 * Define all your Boards web-routes
 */

import { Router } from "express";
import BoardsController from "../controllers/boards.controller";

const router = Router()
                .get("/", BoardsController.getAll)
                .get("/:id", BoardsController.getById)
                .post("/", BoardsController.create)
                .delete("/:id", BoardsController.remove)
                .put("/:id", BoardsController.update);

export default router;
