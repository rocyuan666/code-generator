/**
 * @typedef Config - 配置
 * @property {Object} db - 数据库配置
 * @property {String} db.host - 主机
 * @property {Number} db.port - 端口
 * @property {String} db.database - 数据库
 * @property {String} db.user - 用户名
 * @property {String} db.password - 密码
 * @property {String[]} genTables - 需要生成的表名
 */

export default {
  db: {
    host: "localhost",
    port: 3306,
    database: "fastadmin",
    user: "root",
    password: "root",
  },
  genTables: ["fa_admin"],
};
