import { IProvidedService } from "./provided-service.interface";

export interface IBoardsService extends IProvidedService {   
    getAll();
    getById(id: string);
    create(title: string, userId: string);
    remove(id: string);
    update(id: string, body: Object);
}