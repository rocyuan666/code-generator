import mysql from "mysql2";
import cfg from "../config.js";

const pool = mysql.createPool(cfg.db);

pool.getConnection((error, conn) => {
  if (error) return console.log("mysql发生致命错误: ", error);
  conn.connect((err) => {
    if (err) {
      console.log("mysql连接错误: ", err);
    }
  });
});

export default pool.promise();
