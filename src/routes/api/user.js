/**
 * @description user api 路由
 * @author 小熊熊
 */

const Router = require('koa-router')()
const { isExist } = require('../../controller/user')

Router.prefix('/api/user')

Router.post('/register', (ctx, next) => {})
Router.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})

module.exports = Router
