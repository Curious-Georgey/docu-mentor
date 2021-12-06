import { Board } from "../../entity/Board";

export interface IBoardsStorage {
    getAll(): Promise<Board[] | Error>;
    getById(id: string): Promise<Board | Error>;
    create(title: string, userId: string): Promise<Board | Error>;
    remove(id: string);
    update(id: string, body: Object);
}