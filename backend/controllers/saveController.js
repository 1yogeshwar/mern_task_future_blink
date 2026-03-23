const Prompt = require('../models/Prompt')

const savePrompt = async (req, res) => {
    try {
        const { prompt, answer } = req.body

        const newPrompt = new Prompt({
            prompt,
            answer
        })

        await newPrompt.save()
         console.log(newPrompt);
        res.json({ message: 'Saved successfully', data: newPrompt })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Could not save to database' })
    }
}

module.exports = { savePrompt }