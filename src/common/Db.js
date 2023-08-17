import pool from "../database/index.js";
import cfg from "../config.js";
const { db } = cfg;

/**
 * @typedef TableInfo
 * @property {String} TABLE_CATALOG
 * @property {String} TABLE_SCHEMA
 * @property {String} TABLE_NAME - 表名
 * @property {String} TABLE_TYPE
 * @property {String} ENGINE
 * @property {Number} VERSION
 * @property {String} ROW_FORMAT
 * @property {Number} TABLE_ROWS
 * @property {Number} AVG_ROW_LENGTH
 * @property {Number} DATA_LENGTH
 * @property {Number} MAX_DATA_LENGTH
 * @property {Number} INDEX_LENGTH
 * @property {Number} DATA_FREE
 * @property {Number} AUTO_INCREMENT
 * @property {Date} CREATE_TIME
 * @property {Date} UPDATE_TIME
 * @property {Date} CHECK_TIME
 * @property {String} TABLE_COLLATION
 * @property {String} CHECKSUM
 * @property {String} CREATE_OPTIONS
 * @property {String} TABLE_COMMENT
 */

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
