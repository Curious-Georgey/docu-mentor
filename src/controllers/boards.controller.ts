/**
 * Handler for Home
 */

import { Response, Request } from "express";
import { IRequest } from "../interfaces/vendors";
import { connection } from "../connection/Connection";
import { Board } from "../entity/Board";
import { IBoardsService } from "../interfaces/services/boards-service.interface";

class Boards {
    public static index(req: IRequest, res: Response, next): Response {
        return res.status(200).send({ message: "This method needs a real implementation" });
    }

    public static getAll(req: IRequest, res: Response, next): void {

        const result = (req.service as IBoardsService).getAll;
        res.json(result);
    }

    public static getById(req: IRequest, res: Response, next): void {
        const id = req.params['id'];

        const result = (req.service as IBoardsService).getById(id);
        res.json(result);
    }

    public static create(req: IRequest, res: Response, next): void {
        const requestBody = req.body;
        const title = requestBody.title;
        const userId = "GeeCeeX";

        const result = (req.service as IBoardsService).create(title, userId);
        res.json(result);
    }
}

export default Boards;