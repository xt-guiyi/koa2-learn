/**
 * @description user service
 * @author 小熊熊
 */

const { User } = require('../db/model/index')
const { formateUser } = require('./_formate')
/**
 * @param { string } userName 用户名
 * @param {string } password 密码
 */
async function getUserInfo(userName, password) {
  // 查询条件
  let whereOpt = {
    userName,
  }
  if (password) {
    Reflect.assign(whereOpt, password)
  }
  // 查询
  console.log('1')

  const result = await User.findOne({
    attributes: ['id', 'userName', 'nickname', 'picture', 'city'],
    where: whereOpt,
  })

  if (result == null) {
    return result
  }
  //格式化
  const formate = formateUser(result.dataValues)
  return formate
}

module.exports = {
  getUserInfo: getUserInfo,
}
