/**
 * Handler for Home
 */

import { Response } from "express";
import { IRequest } from "../interfaces/vendors";

class Boards {
    public static index(req: IRequest, res: Response, next): Response {
        return res.status(200).send({ message: "This method needs a real implementation"});
    }

    public static create(req: IRequest, res: Response, next): Response {
        return res.status(200).send({ message: "This method needs a real implementation"});
    }
}

export default Boards;
