import { IBoardsService } from "../interfaces/services/boards-service.interface";
import { IRequest } from "../interfaces/vendors";

import { Response } from "express";

class BoardsService implements IBoardsService {

    public getAll() {

    }

    public getById(id: string) {

    }

    public create(title: string, userId: string) {
    }

    public remove(id: string) {
    }

    public update(id: string, body: Object) {
    }
}

export const provideBoardsService = (req: IRequest, res: Response, next: Function): void => {
    const service = new BoardsService();
    req.service = {
        getAll: service.getAll,
        getById: service.getById,
        create: service.create,
        remove: service.remove,
        update: service.update
    };
    next();
}