import { IRequest } from "../interfaces/vendors";

import { Response } from "express";
import { ITasksService } from "../interfaces/services/tasks-service.interface";
import { Task } from "../entity/Task";
import { TasksStorage } from "../storages/tasks.storage";

class TasksService implements ITasksService {

    
    public getAll(boardId: string): Promise<Task[] | Error> {
        console.log('TasksService::getAll');
        
        const result = TasksStorage.getAll(boardId);
        return result;
    }

    public getById(id: string): Promise<Task | Error> {
        console.log('TasksService::getById');

        const result = TasksStorage.getById(id);
        return result;
    }

    public create(
        boardId: string,
        title: string,
        description: string,
        assignee: string,
        priority: string,
        estimate: string,
        order: number
        ): Promise<Task | Error> 
        {
        console.log('TasksService::create');
        
        const result = TasksStorage.create(
            boardId,
            title,
            description,
            assignee,
            priority,
            estimate,
            order
        );
        return result;
    }

    public remove(id: string): Promise<boolean | Error> {
        console.log('TasksService::remove');

        const result = TasksStorage.remove(id);
        return result;
    }

    public update(id: string, body: Object): Promise<Task | Error> {
        console.log('TasksService::update');

        const result = TasksStorage.update(id, body);
        return result;
    }
}

export const provideTasksService = (req: IRequest, res: Response, next: Function): void => {
    const service = new TasksService();
    req.service = {
        getAll: service.getAll,
        getById: service.getById,
        create: service.create,
        remove: service.remove,
        update: service.update,
    };
    next();
};
