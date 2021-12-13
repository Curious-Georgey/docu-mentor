import { connection } from "../connection/Connection";
import { Board } from "../entity/Board";
import { Task } from "../entity/Task";
import { ITaskUpdateBody } from "../interfaces/update-bodies/task-update-body";

export class TasksStorage {
    static getAll = async (boardId: string): Promise<Task[] | Error> => {
        console.log('TasksStorage::getAll');

        return await connection
            .then(async (connection) => {
                const board: Board = await connection.manager.findOne(Board, boardId);

                if (!Board) throw new Error('Board ID is not valid')

                const result: Task[] = await connection.manager.find(Task, { board: board })

                return result;
            })
            .catch((error) => {
                console.error("Error ", error);
                return new Error(JSON.stringify(error));
            });
    }

    static getById = async (id: string): Promise<Task | Error> => {
        console.log('TasksStorage::getById');

        return await connection
            .then(async (connection) => {
                const result: Task = await connection.manager.findOne(Task, id);
                return result;
            })
            .catch((error) => {
                console.error("Error ", error);
                return new Error(JSON.stringify(error));
            });
    }

    static create = async (
        boardId: string,
        title: string,
        description: string,
        assignee: string,
        priority: string,
        estimate: string,
        order: number
    ): Promise<Task | Error> => {
        console.log('TasksStorage::create');

        return await connection
            .then(async (connection) => {
                const board: Board = await connection.manager.findOne(Board, boardId);

                if (!Board) throw new Error('Board ID is not valid');

                let taskToCreate: Task = new Task();
                const now = new Date().toISOString();

                taskToCreate.title = title;
                taskToCreate.board = board;
                taskToCreate.createdAt = taskToCreate.updatedAt = now;
                taskToCreate.description = description;
                taskToCreate.assignee = assignee;
                taskToCreate.priority = priority;
                taskToCreate.estimate = estimate;
                taskToCreate.order = order;

                const response = await connection.manager.save(taskToCreate);
                return response;
            })
            .catch((error) => {
                console.error("Error ", error);
                return new Error(JSON.stringify(error));
            });
    }

    static remove = async (id: string): Promise<boolean | Error> => {
        console.log('TasksStorage::remove');

        return await connection
            .then(async connection => {
                const response = await connection.manager.delete(Task, id);
                return !!response;
            })
            .catch(error => {
                console.error("Error ", error);
                return new Error(JSON.stringify(error));
            });
    }

    static update = async (id: string, body: ITaskUpdateBody): Promise<Task | Error> => {
        console.log('TasksStorage::update')
        return await connection
            .then(async connection => {
                //return response;
                let task = await connection.manager.findOne(Task, id);
                const now = new Date().toISOString();
                if (!task) {
                    return new Error(JSON.stringify('NO TASK HAS BEEN FOUND'));
                }
                Object.assign(task, body);
                task.updatedAt = now;
                const response = await connection.manager.save(task);
                return response;
            })
            .catch(error => {
                console.error("Error ", error);
                return new Error(JSON.stringify(error));
            });
    }

}
