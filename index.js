const express = require('express')
const authRouter = require('./routes/authRouter')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.use('/auth',authRouter)
 
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en ${PORT}`)
})