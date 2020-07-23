/**
 * @description user controller
 * @author 小熊熊
 */
const { getUserInfo } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { registerUserNameNoteExistInfo } = require('../model/ErrorInfo')

/**
 * @parm {string} userName 用户名
 */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    return new SuccessModel(userInfo)
  } else {
    return new ErrorModel(registerUserNameNoteExistInfo)
  }
}

module.exports = {
  isExist,
}
