/**
 * Define all your routes
 */

import { Application } from "express";

import { provideBoardsService } from "../services/boards.service";
import boardsRouter from "./../routes/board-routes";

class Routes {

    public init(app: Application): Application {
        console.log('Routes::init');
        this.mountBoards(app);

        return app;
    }

    public mountBoards(express: Application): Application {
        console.log('Routes::mountBoards');
        const boardsPrefix = "boards";

        return express.use(`/${boardsPrefix}`, provideBoardsService, boardsRouter);
    }
}

export default new Routes();
