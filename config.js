require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  geminiApiKey: process.env.GEMINI_API_KEY,
  geminiApiUrl: 'https://api.google.dev/gemini/v1/live', // Replace with actual Gemini Live API endpoint
};