import { renderTemplate, templatePath, outFilePath } from "./common/utils.js";
import Db from "./common/Db.js";
import cfg from "./config.js";
import "./types/index.js";

async function main() {
  const generateTableNames = cfg.genTables;
  /**@type {TableInfo[]} */
  const tables = [...(await Db.getTables())];

  for (let table of tables) {
    const isGenerate = generateTableNames.includes(table.TABLE_NAME);
    if (!isGenerate) continue;
    /**@type {ColumnsInfo[]} */
    const columns = await Db.getColumns(table.TABLE_NAME);
    // 模板数据
    const data = {
      table,
      columns,
    };
    // 生成vue文件
    renderTemplate(templatePath("index.vue3.ejs"), data, outFilePath(`vue/view/${table.TABLE_NAME}/index.vue`));
    // 生成js文件
    renderTemplate(templatePath("api.ejs"), data, outFilePath(`vue/api/${table.TABLE_NAME}.js`));
  }
}
await main();
console.log("生成完成");
process.exit();
