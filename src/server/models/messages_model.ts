import { pool } from "./mysqlcon";

const createMessages = async function (title: string, content: string, channel: string, createAt: number) {
    const conn = await pool.getConnection();
    // console.log(conn.format("INSERT INTO message (title, content, channel, createAt) VALUES ?;", [[[title, content, channel, createAt]]]));
    await conn.query("INSERT INTO message (title, content, channel, createAt) VALUES ?;", [[[title, content, channel, createAt]]]);
    await conn.release();
};

const getMessages = async function () {

};

export { createMessages, getMessages };
