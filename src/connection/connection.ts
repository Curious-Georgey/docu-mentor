import { createConnection } from "typeorm";
import { Board } from "../entity/Board";
import { BoardBlock } from "../entity/BoardBlock";
export const connection = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "documentor-core",
    password: "v^t7DCkeKn&P6Jp@",
    database: "documentor-core",
    entities: [
        Board,
        BoardBlock,
    ],
    synchronize: true,
    logging: false,
});
