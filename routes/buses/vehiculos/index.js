const Router = require('koa-router')
const router = new Router()

router.get('/personas/:RUT/', (ctx) => {
    ctx.body = {message: "ver en LOG" + ctx.params.RUT}
})

module.exports = router.routes()