/**
 * Handler for Home
 */

import { Response } from "express";
import { IBoardsService } from "../interfaces/services/boards-service.interface";
import { IRequest } from "../interfaces/vendors";

class Boards {
    public static index(req: IRequest, res: Response, next): Response {
        return res.status(200).send({ message: "This method needs a real implementation" });
    }

    public static async getAll(req: IRequest, res: Response, next): Promise<void> {
        console.log('BoardsController::getAll')

        const result = await (req.service as IBoardsService).getAll();
        res.json(result);
    }

    public static async getById(req: IRequest, res: Response, next): Promise<void> {
        console.log('BoardsController::getById')
        const id = req.params.id;

        const result = await (req.service as IBoardsService).getById(id);
        res.json(result);
    }

    public static async create(req: IRequest, res: Response, next): Promise<void> {
        console.log('BoardsController::create')
        const requestBody = req.body;
        const title = requestBody.title;
        const userId = "GeeCeeX";

        const result = await (req.service as IBoardsService).create(title, userId);
        res.json(result);
    }

    public static async remove(req: IRequest, res: Response, next): Promise<void> {
        console.log('BoardsController::remove')
        const id = req.params.id;

        const result = await (req.service as IBoardsService).remove(id);
        res.json(result);
    }

    public static async update(req: IRequest, res: Response, next): Promise<void> {
        console.log('BoardsController::update')
        const id = req.params.id;
        const requestBody = req.body;
        let params = {};
        if(!!requestBody.title) {
            params['title'] = requestBody.title;
        }

        if(!!Object.keys(params).length) {
            const result = await (req.service as IBoardsService).update(id, params);
            res.json(result);
        }
        else {
            // should return error
        }

    }
}

export default Boards;
