import { pool } from "./mysqlcon";

const createChannel = async function (channelName: string) {
    const conn = await pool.getConnection();
    await conn.query("INSERT INTO channel (name) VALUES ?;", [[[channelName]]]);
    await conn.release();
};

export { createChannel };
