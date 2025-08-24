const express = require('express');
const router = express.Router();
const geminiService = require('../services/geminiService');

async function handleMessage(data) {
  try {
    const response = await geminiService.processInput(data);
    return response;
  } catch (error) {
    console.error('Error in handleMessage:', error);
    throw error;
  }
}

module.exports = { handleMessage };

router.post('/chat', async (req, res) => {
  try {
    const { input, type } = req.body;
    const response = await geminiService.processInput({ type, data: input });
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports.router = router;