const express = require('express')
const ConfigDb = require('./config/db')
const route  = require('./config/routes')
const app = express()

app.use(express.json())
ConfigDb()
app.use(route)
app.listen(5000,() =>{
    console.log('server is started')
})