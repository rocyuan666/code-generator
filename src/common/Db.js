import pool from "../database/index.js";
import cfg from "../config.js";
const { db } = cfg;

class Db {
  /**
   * 获取表信息集合
   * @returns {Promise<Object>} 表信息集合
   */
  static async getTables() {
    const sql = "SELECT * FROM `information_schema`.`tables` WHERE TABLE_SCHEMA = ?";
    const result = await pool.execute(sql, [db.database]);
    return result[0];
  }
  /**
   * 获取字段信息集合
   * @returns {Promise<Object>} 字段信息集合
   */
  static async getColumns(tableName) {
    const sql = "SELECT * FROM `information_schema`.`columns` WHERE TABLE_SCHEMA = ? AND table_name = ?";
    const result = await pool.execute(sql, [db.database, tableName]);
    return result[0];
  }
}

export default Db;
