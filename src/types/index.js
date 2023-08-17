/**
 * @typedef TableInfo - 表信息
 * @property {String} TABLE_CATALOG - 表目录
 * @property {String} TABLE_SCHEMA - 数据库名
 * @property {String} TABLE_NAME - 表名
 * @property {String} TABLE_TYPE - 表类型
 * @property {String} ENGINE - 引擎
 * @property {Number} VERSION - 版本
 * @property {String} ROW_FORMAT - 行格式（数据格式）
 * @property {Number} TABLE_ROWS - 行数（数据条数）
 * @property {Number} AVG_ROW_LENGTH - 平均长度
 * @property {Number} DATA_LENGTH - 数据长度
 * @property {Number} MAX_DATA_LENGTH - 最大数据长度
 * @property {Number} INDEX_LENGTH - 索引长度
 * @property {Number} DATA_FREE - 数据开放
 * @property {Number} AUTO_INCREMENT - 自动递增
 * @property {Date} CREATE_TIME - 创建时间
 * @property {Date} UPDATE_TIME - 更新时间
 * @property {Date} CHECK_TIME - 检查时间
 * @property {String} TABLE_COLLATION - 表排序规则
 * @property {Number} CHECKSUM - 检查和
 * @property {String} CREATE_OPTIONS - 创建选项
 * @property {String} TABLE_COMMENT - 表注释
 */

/**
 * @typedef ColumnsInfo - 字段信息
 * @property {String} TABLE_CATALOG - 表目录
 * @property {String} TABLE_SCHEMA - 数据库名
 * @property {String} TABLE_NAME - 表名
 * @property {String} COLUMN_NAME - 字段名
 * @property {Number} ORDINAL_POSITION - 字段顺序
 * @property {String} COLUMN_DEFAULT - 字段默认值
 * @property {String} IS_NULLABLE - 是否允许NULL
 * @property {String} DATA_TYPE - 字段类型
 * @property {Number} CHARACTER_MAXIMUM_LENGTH - 字符最大长度
 * @property {Number} CHARACTER_OCTET_LENGTH - 字符字节长度
 * @property {Number} NUMERIC_PRECISION - 数字精度
 * @property {Number} NUMERIC_SCALE - 数字大小
 * @property {Number} DATETIME_PRECISION - 日期时间描述
 * @property {String} CHARACTER_SET_NAME- 字符集
 * @property {String} COLLATION_NAME - 字符排序规则
 * @property {String} COLUMN_TYPE - 字段类型
 * @property {String} COLUMN_KEY - 字段键
 * @property {String} EXTRA - 额外的（自动增长...）
 * @property {String} PRIVILEGES - 权限
 * @property {String} COLUMN_COMMENT - 注释
 * @property {String} GENERATION_EXPRESSION - 生成表达式
 */
