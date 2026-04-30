const redis = require('redis')

const client = redis.createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
})
client.on('connect', () => console.log('Redis connected'))


const connectRedis = async () => {
    try {
        await client.connect()
    } catch (error) {
        console.error('Failed to connect to Redis:', error.message)
    }
}

module.exports = { client, connectRedis }