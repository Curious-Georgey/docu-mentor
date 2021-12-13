/**
 * Handler for Tasks
 */

import { Response } from "express";
import { ITasksService } from "../interfaces/services/tasks-service.interface";
import { ITaskUpdateBody } from "../interfaces/update-bodies/task-update-body";
import { IRequest } from "../interfaces/vendors";

class Tasks {
    public static async getAll(req: IRequest, res: Response, next): Promise<void> {
        console.log('TasksController::getAll');
        const boardId = req.params.boardId;

        const result = await (req.service as ITasksService).getAll(boardId);
        res.json(result);
    }

    public static async getById(req: IRequest, res: Response, next): Promise<void> {
        console.log('TasksController::getById');
        const id = req.params.id;

        const result = await (req.service as ITasksService).getById(id);
        res.json(result);
    }

    public static async create(req: IRequest, res: Response, next): Promise<void> {
        console.log('TasksController::create');

        const requestBody = req.body;

        const title = requestBody.title;
        const board = requestBody.board;
        const description = requestBody.description;
        const assignee = requestBody.assignee;
        const priority = requestBody.priority;
        const estimate = requestBody.estimate;
        const order = requestBody.order;

        const result = await (req.service as ITasksService).create(
            board,
            title,
            description,
            assignee,
            priority,
            estimate,
            order
        );

        res.json(result);
    }

    public static async remove(req: IRequest, res: Response, next): Promise<void> {
        console.log('TasksController::remove');

        const id = req.params.id;

        const result = await (req.service as ITasksService).remove(id);
        res.json(result);
    }

    public static async update(req: IRequest, res: Response, next): Promise<void> {
        console.log('TasksController::update');
        const id = req.params.id;
        const requestBody = req.body;
        let params = {
            ...req.body
        } as ITaskUpdateBody;


        const result = await (req.service as ITasksService).update(id, params);
        res.json(result);
    }
}

export default Tasks;
