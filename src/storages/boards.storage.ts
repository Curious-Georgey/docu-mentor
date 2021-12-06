import { connection } from "../connection/Connection";
import { Board } from "../entity/Board";
import { IBoardsStorage } from "../interfaces/storages/boards-storage.interface";

export class BoardsStorage {
    static getAll = async (): Promise<Board[] | Error> => {
        console.log('BoardsStorage::getAll')
        return await connection
            .then(async (connection) => {
                const boards: Board[] = await connection.manager.find(Board);
                return boards;
            })
            .catch((error) => {
                console.error("Error ", error);
                return new Error(JSON.stringify(error));
            });
    }
    static getById = async (id: string): Promise<Board | Error> => {
        console.log('BoardsStorage::getById')
        return await connection
            .then(async (connection) => {
                const board: Board = await connection.manager.findOne(Board, id);
                return board;
            })
            .catch((error) => {
                console.error("Error ", error);
                return new Error(JSON.stringify(error));
            });
    }
    static create = async (title: string, userId: string): Promise<Board | Error> => {
        console.log('BoardsStorage::create')
        return await connection
            .then(async (connection) => {
                const boardToCreate: Board = new Board();
                boardToCreate.title = title;
                boardToCreate.userId = userId;
                boardToCreate.blocks = [];
                const response = await connection.manager.save(boardToCreate);
                return response;
            })
            .catch((error) => {
                console.error("Error ", error);
                return new Error(JSON.stringify(error));
            });
    }
    static remove = async (id: string): Promise<boolean | Error> => {
        console.log('BoardsStorage::remove')
        return await connection
                    .then(async connection => {
                        const response = await connection.manager.delete(Board, id);
                        return !!response;
                    })
                    .catch(error => {
                        console.error("Error ", error);
                        return new Error(JSON.stringify(error));
                    });
    }
    static update = async (id: string, body: Object): Promise<Board | Error> => {
        console.log('BoardsStorage::update')
        return await connection
                    .then(async connection => {
                        let board = await connection.manager.findOne(Board, id); 
                        if (!board) {
                            return new Error(JSON.stringify('NO BOARD HAS BEEN FOUND'));
                        }
                        Object.assign(board, body)
                        const response = await connection.manager.save(board);
                        return response;
                    })
                    .catch(error => {
                        console.error("Error ", error);
                        return new Error(JSON.stringify(error));
                    });
    }

}
