import path from "path";
import ejs from "ejs";
import fse from "fs-extra";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 *
 * @param {String} path - 模板路径
 * @param {Object} data - 模板数据
 * @param {String} outFilePath - 输出文件路径
 */
export async function renderTemplate(path, data, outFilePath) {
  ejs.renderFile(path, data, (err, str) => {
    if (err) return console.log("发生错误：", err);
    fse.outputFileSync(outFilePath, str);
  });
}

/**
 * 模板路径生成
 * @param {String} tpPath - 基于/src/template/的路径
 * @returns {String} - 完整的模板目录
 */
export function templatePath(tpPath) {
  return path.join(__dirname, "../", "template", tpPath);
}

/**
 * 输出文件路径生成
 * @param {String} ofPath - 基于/out/的路径
 * @returns {String} - 完整的输出文件路径
 */
export function outFilePath(ofPath) {
  return path.join(__dirname, "../../", "out", ofPath);
}

/**
 * 蛇形命名转换大小驼峰命名处理
 * @param {String} snakeName - 蛇形名
 * @param {Boolean} isBig - 是否大驼峰
 * @returns
 */
export function snakeFormatHump(snakeName, isBig = false) {
  let humpName = "";
  const snakeNames = snakeName.split("_");
  snakeNames.forEach((snakeSplit, index) => {
    if (isBig || index > 0) {
      snakeSplit = snakeSplit[0].toUpperCase() + snakeSplit.substring(1);
    }
    humpName += snakeSplit;
  });
  return humpName;
}
