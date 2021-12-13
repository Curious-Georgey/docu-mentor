import { Board } from "../../entity/Board";
import { IProvidedService } from "./provided-service.interface";

export interface IBoardsService extends IProvidedService {
    getAll(): Promise<Board[] | Error>;
    getById(id: string): Promise<Board | Error>;
    create(title: string, userId: string): Promise<Board | Error>;
    remove(id: string): Promise<boolean | Error>;
    update(id: string, body: Object): Promise<Board | Error>;
}
