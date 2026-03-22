const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config();
const apiRoutes = require('./routes/api')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', apiRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
        console.log('server is up and running')
})