require('dotenv/config')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')

const app = express()
app.use(express.json())
app.use(express.static(`${__dirname}/../build`));

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    app.listen(SERVER_PORT,()=>console.log(`Portfolio running on ${SERVER_PORT}`))
})

app.post('/api/message',ctrl.message)