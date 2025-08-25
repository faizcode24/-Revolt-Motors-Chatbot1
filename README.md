Gemini Live – Revolt "Rev" Voice Chat Clone

This project replicates the Revolt Motors voice chat assistant using the Gemini Live API. It is built with a Node.js/Express backend (server-to-server architecture) and a React frontend for real-time conversational voice interaction.

Features

Real-time voice conversation with Gemini Live.

Interruptions / Barge-in: Users can interrupt the AI while it is speaking, and the assistant will respond immediately to new input.

Low latency: Optimized to provide responses in ~1–2 seconds.

Multilingual support: Native audio dialog models automatically detect and respond in multiple languages.

System instructions: AI only talks about Revolt Motors, keeping conversations relevant.

Setup Instructions
1. Clone the repository
git clone <repo_url>
cd <repo_folder>
2. Configure environment variables

In the server/ folder, copy .env.example to .env and set the following:

GOOGLE_API_KEY=your_api_key_here
GEMINI_MODEL=gemini-2.5-flash-preview-native-audio-dialog

For development, you can switch to gemini-2.0-flash-live-001 or gemini-live-2.5-flash-preview to avoid free-tier rate limits.

3. Install dependencies
Backend
cd server
npm install
Frontend
cd ../web
npm install
4. Run the application
Start backend
cd server
npm run dev
Start frontend
cd ../web
npm run dev

Open the frontend in your browser at http://localhost:5173

5. Usage

Speak to the AI using the microphone.

Press the Interrupt button to stop the AI and start a new query.

The AI responds in real-time with low latency.
