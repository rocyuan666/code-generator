import { renderTemplate, templatePath, outFilePath, snakeFormatHump } from './common/utils.js'
import Db from './common/Db.js'
import cfg from './config.js'
import mysqlToJs from './map/mysqlToJs.js'
import './types/index.js'

async function main() {
  const generateTableNames = cfg.genTables
  /**@type {TableInfo[]} */
  const tables = [...(await Db.getTables())]

  for (let table of tables) {
    const isGenerate = generateTableNames == '*' || generateTableNames.includes(table.TABLE_NAME)
    if (!isGenerate) continue
    /**@type {ColumnsInfo[]} */
    const columns = await Db.getColumns(table.TABLE_NAME)
    // 模板数据
    const data = {
      table,
      columns,
      mysqlToJs,
      fn: {
        snakeFormatHump,
      },
    }
    // 生成vue文件
    renderTemplate(
      templatePath('index.vue3.ejs'),
      data,
      outFilePath(`${cfg.projectName}/vue/view/${snakeFormatHump(table.TABLE_NAME)}/index.vue`),
    )
    // 生成js文件
    renderTemplate(
      templatePath('api.ejs'),
      data,
      outFilePath(`${cfg.projectName}/vue/api/${snakeFormatHump(table.TABLE_NAME)}.js`),
    )
  }
}
await main()
console.log('生成完成')
process.exit()
