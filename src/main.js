import fse from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'node:url'
import { renderTemplate, templatePath, outFilePath, snakeFormatHump } from './common/utils.js'
import Db from './common/Db.js'
import cfg from './config.js'
import mysqlToJs from './map/mysqlToJs.js'
import './types/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const successGenTableNames = []
const errorGenTableNames = []

async function main() {
  // 加载额外json数据
  const jsonPath = path.join(__dirname, 'extJson', 'ext.json')
  const extJson = fse.readJsonSync(jsonPath)

  // 需要生成的表名
  const generateTableNames = cfg.genTables

  /**
   * 数据库表信息
   * @type {TableInfo[]}
   */
  const tables = [...(await Db.getTables())]

  for (let table of tables) {
    if (!extJson[table.TABLE_NAME]) {
      errorGenTableNames.push(table.TABLE_NAME)
      continue
    }
    const isGenerate = generateTableNames == '*' || generateTableNames.includes(table.TABLE_NAME)
    if (!isGenerate) continue
    /**@type {ColumnsInfo[]} */
    const columns = await Db.getColumns(table.TABLE_NAME)
    // 模板数据
    const data = {
      table,
      columns,
      mysqlToJs,
      extInfo: extJson[table.TABLE_NAME],
      fn: {
        snakeFormatHump,
      },
    }
    // 生成vue3文件
    renderTemplate(
      templatePath('vue3/index.vue.ejs'),
      data,
      outFilePath(`${cfg.projectName}/vue/view/${snakeFormatHump(table.TABLE_NAME)}/index.vue`),
    )
    // 生成js api文件
    renderTemplate(
      templatePath('js/api.ejs'),
      data,
      outFilePath(`${cfg.projectName}/vue/api/${snakeFormatHump(table.TABLE_NAME)}.js`),
    )
    successGenTableNames.push(table.TABLE_NAME)
  }
}
await main()

console.log('***************** 生成结果 ******************')
console.log('【失败】', errorGenTableNames.length, errorGenTableNames.toString())
console.log('error: 缺少表的额外json数据')
console.log('--------------------------------------------')
console.log('【成功】', successGenTableNames.length, successGenTableNames.toString())
console.log('********************************************')

process.exit()
