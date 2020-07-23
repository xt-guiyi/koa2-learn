/**
 * @description 数据格式化
 * @author 小熊熊
 */

const { DEFAULT_PICTURE } = require('../conf/constant')
/**
 * 用户默认头像
 * @param {Object} obj 用户对象
 */

function _formateUserPicture(obj) {
  if (obj.picture == null) {
    obj.picture = 'https://dwz.cn/rnTnftZs'
  }
  return obj
}

/**
 * 格式化用户信息
 * @param {Array|Object} obj 用户列表或者单个数据对象
 */

function formateUser(list) {
  if (list === null) {
    return list
  }

  if (list instanceof Array) {
    // 数组， 用火列表
    return list.map(_formateUserPicture)
  }
  //单个对象
  return _formateUserPicture(list)
}

module.exports = {
  formateUser,
}
