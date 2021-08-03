import { createChannel } from "../models/channel_model";
import { Request, Response } from "express-serve-static-core";

const setChannel = async function (req: Request, res: Response) {
    const name: string = req.body.name;
    await createChannel(name);
    res.send("DONE!");
};

const test = function (req: Request, res: Response) {
    res.send("HI!!");
};

export { setChannel, test };
