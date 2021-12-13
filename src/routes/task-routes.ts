
/**
 * Define all your Boards web-routes
 */

import { Router } from "express";
import TasksController from "../controllers/tasks.controller";

const router = Router()
                .get("/board/:boardId", TasksController.getAll)
                .get("/:id", TasksController.getById)
                .post("/", TasksController.create)
                .delete("/:id", TasksController.remove)
                .put("/:id", TasksController.update);

export default router;
