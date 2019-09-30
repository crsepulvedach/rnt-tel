const koa = require('koa') 
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const busesRoute = require('./routes/buses')
const colectivosRoute = require('./routes/colectivos')
const escolarRoute = require('./routes/escolar')
const privadoRoute = require('./routes/privado')
const taxisRoute = require('./routes/taxis')
const logger = require('./log')
const port = 3001
const app = new koa()
app.use(bodyParser())
const router = new Router()
router.use('/buses',busesRoute)
router.use('/taxis_colectivos',colectivosRoute)
router.use('/escolares',escolarRoute)
router.use('/privados',privadoRoute)
router.use('/taxis',taxisRoute)
app.use(router.routes())
app.listen(port, () => {
    logger.debug("RNT-API iniciado en puerto: " + port)
    // console.log("RNT-API iniciado en puerto: " + port)
})