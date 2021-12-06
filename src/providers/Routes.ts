/**
 * Define all your routes
 */

import { Application } from "express";

import boardsRouter from "./../routes/board-routes";
import { provideBoardsService } from '../services/boards-service';

class Routes {

    public init(app: Application): Application {
        this.mountBoards(app);

        return app;
    }

    public mountBoards(express: Application): Application {
        const boardsPrefix = "boards";

        return express.use(`/${boardsPrefix}`, provideBoardsService, boardsRouter);
    }
}

export default new Routes();