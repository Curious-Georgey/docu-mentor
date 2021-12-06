import { connection } from "../connection/Connection";
import { Board } from "../entity/Board";
import { IBoardsStorage } from "../interfaces/storages/boards-storage.interface";


export class BoardsStorage implements IBoardsStorage {
    async getAll(): Promise<Board[] | Error> {
        return await connection
            .then(async connection => {
                const boards: Board[] = await connection.manager.find(Board);
                return boards;
            })
            .catch(error => {
                console.error("Error ", error);
                return new Error(JSON.stringify(error));
            });
    }
    async getById(id: string): Promise<Board | Error> {
        return await connection
            .then(async connection => {
                const board: Board = await connection.manager.findOne(Board, id);
                return board;
            })
            .catch(error => {
                console.error("Error ", error);
                return new Error(JSON.stringify(error));
            });
    }
    async create(title: string, userId: string): Promise<Board | Error> {
        return await connection
            .then(async connection => {
                let boardToCreate: Board = new Board();
                boardToCreate.title = title;
                boardToCreate.userId = userId;
                boardToCreate.blocks = [];
                const response = await connection.manager.save(boardToCreate);
                return response;
            })
            .catch(error => {
                console.error("Error ", error);
                return new Error(JSON.stringify(error));
            });
    }
    remove(id: string) {
        throw new Error("Method not implemented.");
    }
    update(id: string, body: Object) {
        throw new Error("Method not implemented.");
    }

}