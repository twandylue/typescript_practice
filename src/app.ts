import dotenv from "dotenv";
import express, { Application, NextFunction } from "express";
dotenv.config();
const app: Application = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const add = (a: number, b: number): number => a + b;
// app.get("/", (req: Request, res: Response) => {
//     console.log(add(5, 5));
//     res.send("Hello");
// });

app.use([
    require("./server/routes/channel_route"),
    require("./server/routes/message_route")
]);

app.listen(3000, () => {
    console.log("Server running...");
});
