import { renderTemplate, templatePath, outFilePath } from "./common/utils.js";
import Db from "./common/Db.js";
import cfg from "./config.js";

async function main() {
  const generateTableNames = cfg.genTables;
  const tables = [...(await Db.getTables())];

  for (let table of tables) {
    const isGenerate = generateTableNames.includes(table.TABLE_NAME);
    if (!isGenerate) continue;
    const columns = await Db.getColumns(table.TABLE_NAME);
    const data = {
      DB: {
        table,
        columns,
      },
      meta: {
        name: "rocyuan",
      },
    };
    // 生成vue文件
    renderTemplate(templatePath("index.vue3.ejs"), data, outFilePath(`vue/view/${table.TABLE_NAME}/index.vue`));
  }
}
await main();
console.log("生成完成");
process.exit();
