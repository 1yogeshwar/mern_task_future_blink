const axios = require('axios')
const { client: redisClient } = require('../config/redis')

const askAI = async (req, res) => {
    try {
        const { prompt } = req.body
        const cacheKey = prompt.trim()

        // Check Redis cache first
        const cachedAnswer = await redisClient.get(cacheKey)
        if (cachedAnswer) {
            console.log('Cache HIT — returning from Redis')
            return res.json({ answer: cachedAnswer, cached: true })
        }

        // Cache miss — call OpenRouter
        console.log('Cache MISS — calling OpenRouter')
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: 'nvidia/nemotron-super-120b:free',
                messages: [{ role: 'user', content: prompt }]
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': 'http://localhost:5000'
                }
            }
        )

        const answer = response.data.choices[0].message.content

        // Save to Redis for 1 hour
        await redisClient.setEx(cacheKey, 3600, answer)
        console.log('Answer cached in Redis')

        res.json({ answer, cached: false })

    } catch (error) {
        console.error('Error:', error.message)
        res.status(500).json({ error: 'Something went wrong' })
    }
}

module.exports = { askAI }