const axios = require('axios');
const config = require('../config/config');
const systemPrompt = require('../systemPrompt');

class GeminiService {
  async processInput({ type, data }) {
    try {
      // Convert audio to text if needed (placeholder; actual implementation depends on API)
      const input = type === 'audio' ? await this.convertAudioToText(data) : data;

      const response = await axios.post(
        config.geminiApiUrl,
        {
          model: 'gemini-2.5-flash-preview-native-audio-dialog', // Switch to other models for dev
          input: input,
          systemPrompt: systemPrompt.systemPrompt,
          apiKey: config.geminiApiKey,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.geminiApiKey}`,
          },
        }
      );

      return response.data.output || 'Sorry, I could not process your request.';
    } catch (error) {
      console.error('Gemini API error:', error);
      throw new Error('Failed to process input');
    }
  }

  async convertAudioToText(audioData) {
    // Placeholder: Implement audio-to-text conversion if required by Gemini API
    // For now, return dummy text or handle via API if it supports direct audio
    return 'User audio input'; // Replace with actual transcription logic
  }
}

module.exports = new GeminiService();