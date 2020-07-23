/**
 * @description user view 路由
 * @author 小熊熊
 */

const Router = require('koa-router')()

Router.get('/login', async (ctx, next) => {
  await ctx.render('login', {})
})

Router.get('/register', async (ctx, next) => {
  await ctx.render('register', {})
})

module.exports = Router
