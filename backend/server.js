const express = require('express')
const cors = require('cors')
require('dotenv').config();
const connection = require('./config/db');
const apiRoutes = require('./routes/api')
const limiter = require('./middleware/rateLimiter')
const { connectRedis } = require('./config/redis')

const startServer = async () => {
    await connectRedis()
    connection()

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use('/api', limiter)
    app.use('/api', apiRoutes)

    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
        console.log('server is up and running')
    })
}

startServer()

