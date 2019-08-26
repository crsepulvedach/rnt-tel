
const express = require('express')

const app = express()

const port = 3000

app.get("/", (req, res, next) => {
    res.send("Testing!")
    next()
})

app.listen(port, () => {
    console.log("RNT-API iniciado en puerto: " + port)
})