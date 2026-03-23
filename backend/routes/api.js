const express = require('express');
const router = express.Router();

const { askAI } = require('../controllers/aiController')
const { savePrompt } = require('../controllers/saveController')

router.post('/ask-ai', askAI)
router.post('/save', savePrompt)

module.exports = router