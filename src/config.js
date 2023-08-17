/**
 * 配置文件
 */
export default {
  db: {
    host: "localhost",
    port: 3306,
    database: "fastadmin",
    user: "root",
    password: "root",
  },
  // 需要生成的表
  genTables: ["fa_admin"],
};
