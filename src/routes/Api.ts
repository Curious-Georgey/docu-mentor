
/**
 * Define all your API web-routes
 */

import { Router } from "express";
import BoardsController from "../controllers/Boards";

const router = Router();

router.get("/", (req, res) => res.status(200).send({message: "hi"}));

router.get("/boards", BoardsController.index);
router.post("/boards", BoardsController.create);

export default router;
