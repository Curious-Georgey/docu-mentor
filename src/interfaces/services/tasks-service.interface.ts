import { Task } from "../../entity/Task";
import { ITaskUpdateBody } from "../update-bodies/task-update-body";
import { IProvidedService } from "./provided-service.interface";

export interface ITasksService extends IProvidedService {
    getAll(boardId: string): Promise<Task[] | Error>;
    getById(id: string): Promise<Task | Error>;
    create(
        boardId: string,
        title: string,
        description: string,
        assignee: string,
        priority: string,
        estimate: string,
        order: number
    ): Promise<Task | Error>;
    remove(id: string): Promise<boolean | Error>;
    update(id: string, body: ITaskUpdateBody): Promise<Task | Error>;
}
