import dotenv from "dotenv";
import mysql from "mysql2/promise";
dotenv.config();
const env = process.env.Node_ENV || "project";
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;
const mysqlConfig = {
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 60
};

const pool = mysql.createPool(mysqlConfig);

export { mysql, pool };
