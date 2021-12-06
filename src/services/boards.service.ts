import { IBoardsService } from "../interfaces/services/boards-service.interface";
import { IRequest } from "../interfaces/vendors";

import { Response } from "express";
import { BoardsStorage } from "../storages/boards.storage";
import { IBoardsStorage } from "../interfaces/storages/boards-storage.interface";
import { Board } from "../entity/Board";

class BoardsService implements IBoardsService {

    
    public getAll(): Promise<Board[] | Error> {
        console.log('BoardsService::getAll');
        try {
            const result = BoardsStorage.getAll();
            return result;
        }
        catch(err) {
            console.log(err)
            return err;
        }
    }

    public getById(id: string): Promise<Board | Error> {
        console.log('BoardsService::getById');
        try {
            const result = BoardsStorage.getById(id);
            return result;
        }
        catch(err) {
            console.log(err)
            return err;
        }
    }

    public create(title: string, userId: string): Promise<Board | Error> {
        console.log('BoardsService::create');
        try {
            const result = BoardsStorage.create(title, userId);
            return result;
        }
        catch(err) {
            console.log(err)
            return err;
        }
    }

    public remove(id: string): Promise<boolean | Error> {
        console.log('BoardsService::remove');
        try {
            const result = BoardsStorage.remove(id);
            return result;
        }
        catch(err) {
            console.log(err)
            return err;
        }
    }

    public update(id: string, body: Object): Promise<Board | Error> {
        console.log('BoardsService::update');
        try {
            const result = BoardsStorage.update(id, body);
            return result;
        }
        catch(err) {
            console.log(err)
            return err;
        }
    }
}

export const provideBoardsService = (req: IRequest, res: Response, next: Function): void => {
    const service = new BoardsService();
    req.service = {
        getAll: service.getAll,
        getById: service.getById,
        create: service.create,
        remove: service.remove,
        update: service.update,
    };
    next();
};
