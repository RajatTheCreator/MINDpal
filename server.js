// =================================================================
// server.js (UPDATED FOR GEMINI API AND MULTI-LANGUAGE)
// =================================================================

const express = require('express');
const { GoogleGenAI } = require('@google/genai');
const path = require('path');
// IMPORTANT: This loads your GEMINI_API_KEY from the .env file
require('dotenv').config(); 

// 1. Configuration
const port = 3000;
const MODEL_NAME = "gemini-2.5-flash"; 

// 2. Initialize the Gemini Client
// The client automatically reads GEMINI_API_KEY from process.env
const ai = new GoogleGenAI({}); 

const app = express();

// Middleware to serve static files (index.html, script.js, style.css)
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// 3. The Core API Endpoint for the Chatbot
app.post('/api/chat', async (req, res) => {
    // Get the conversation history AND the language from the frontend (script.js)
    const { history, language } = req.body; 

    // CRITICAL: Map the short code (en, kn, hi) to the full language name
    const langCode = language || 'en'; // Default to English if none specified
    const langMap = {
        'en': 'English',
        'kn': 'Kannada',
        'hi': 'Hindi'
    };
    const targetLang = langMap[langCode] || 'English';


    // 4. Define the Bot's Persona (System Instruction)
    // The Gemini will now be forced to reply in the user's selected language
    const systemInstruction = `You are MINDpal, a supportive and kind mental wellness bot. Your primary goal is to listen without judgment, offer empathetic responses, and provide basic, generalized advice for mental well-being. ALL of your responses MUST be in the ${targetLang} language. Always encourage seeking professional help for serious issues. Keep your responses concise and compassionate.`;

    
    try {
        // Call the Gemini API's generateContent method
        const response = await ai.models.generateContent({
            model: MODEL_NAME,
            contents: history, // Pass the full conversation history
            config: {
                systemInstruction: systemInstruction, // Apply the persona and language instruction
                temperature: 0.8, 
            },
        });

        // Get the model's text response
        const botText = response.text.trim();
        
        // Send the bot's response back to the frontend
        res.json({ text: botText });

    } catch (error) {
        console.error('Gemini API Error:', error);

        // Return the general error message to the user
        res.status(500).json({ error: 'Sorry, I am having trouble connecting right now. Please try again.' });
    }
});

// 5. Start the Server
app.listen(port, () => {
    console.log(`MINDpal Server running at http://localhost:${port}`);
});