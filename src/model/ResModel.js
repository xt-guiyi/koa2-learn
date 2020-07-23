/**
 * @description  res 的数据模型
 * @author 小熊熊
 */

/**
 * 基础模块
 */

class BaseModel {
  constructor({ error, data, message }) {
    this.error = error
    if (data) {
      this.data = data
    }
    this.message = message
  }
}

/**
 * 成功模块
 */

class SuccessModel extends BaseModel {
  constructor(data = {}) {
    super({ error: 0, data })
  }
}
/**
 * 失败模块
 */
class ErrorModel extends BaseModel {
  constructor({ error = 0, message }) {
    super({ error, message })
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
}
