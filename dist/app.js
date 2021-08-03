"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// const add = (a: number, b: number): number => a + b;
// app.get("/", (req: Request, res: Response) => {
//     console.log(add(5, 5));
//     res.send("Hello");
// });
app.use([
    require("./server/routes/page_route")
]);
app.listen(3000, () => {
    console.log("Server running...");
});
