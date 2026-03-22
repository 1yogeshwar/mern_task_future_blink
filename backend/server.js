const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config();
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())



app.listen(PORT, () =>{
        console.log('server is up and running')
})