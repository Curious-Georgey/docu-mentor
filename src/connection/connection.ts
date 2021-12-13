import { createConnection } from "typeorm";
import { Board } from "../entity/Board";
import { Task } from "../entity/Task";
export const connection = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "documentor-core",
    password: "v^t7DCkeKn&P6Jp@",
    database: "documentor-core",
    entities: [
        Board,
        Task
    ],
    synchronize: true,
    logging: false,
});
