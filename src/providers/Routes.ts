/**
 * Define all your routes
 */

import { Application } from "express";

import { provideBoardsService } from "../services/boards.service";
import { provideTasksService } from "../services/tasks.service";
import boardsRouter from "./../routes/board-routes";
import tasksRouter from "./../routes/task-routes";

class Routes {

    public init(app: Application): Application {
        console.log('Routes::init');

        this.mountBoards(app);
        this.mountTasks(app);

        return app;
    }

    public mountBoards(express: Application): Application {
        console.log('Routes::mountBoards');
        const boardsPrefix = "boards";

        return express.use(`/${boardsPrefix}`, provideBoardsService, boardsRouter);
    }

    public mountTasks(express: Application): Application {
        console.log('Routes::mountTasks');
        const tasksPrefix = "tasks";

        return express.use(`/${tasksPrefix}`, provideTasksService, tasksRouter);
    }
}

export default new Routes();
