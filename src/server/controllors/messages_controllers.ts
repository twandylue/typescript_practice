import { createMessages, getMessages } from "../models/messages_model";
import { Request, Response } from "express-serve-static-core";

const setMessages = async function (req: Request, res: Response) {
    const title: string = req.body.title;
    const content: string = req.body.content;
    const channel: string = req.body.channel;
    const createAt:number = new Date().getTime();
    await createMessages(title, content, channel, createAt);
    res.status(200).send("DONE!");
};

const getAllMessages = async function (req: Request, res: Response) {
    await getMessages(); // 待改
    res.status(200).send("DONE!");
};

export { setMessages, getAllMessages };
