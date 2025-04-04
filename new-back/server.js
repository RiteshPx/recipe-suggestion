const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }));

const GOOGLE_AI_API_KEY = process.env.GOOGLE_AI_API_KEY;
const GOOGLE_AI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

// Function to communicate with Gemini AI
async function askAI(message) {
    try {
        const response = await axios.post(
            `${GOOGLE_AI_URL}?key=${GOOGLE_AI_API_KEY}`,
            {
                contents: [{ role: "user", parts: [{ text: message }] }],
                generationConfig: {
                    temperature: 1,
                    top_p: 0.95,
                    top_k: 40,
                    max_output_tokens: 8192,
                }
            }
        );

        return response.data.candidates[0]?.content?.parts[0]?.text || "No response from AI.";
    } catch (error) {
        console.error("Error communicating with AI:", error);
        return "Error in AI response.";
    }
}

// Route to handle AI requests
var  imageRouter  = require("./routers/imageRouter");
app.use("/images", imageRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/ask-ai", async (req, res) => {
    // const userMessage = req.query.search_query;
    console.log(req.body);
    const userMessage = req.body.userMessage;
    if (!userMessage) {
        return res.status(400).json({ error: "Missing search_query parameter" });
    }

    const aiResponse = await askAI(userMessage);
    res.json({ result: aiResponse });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});