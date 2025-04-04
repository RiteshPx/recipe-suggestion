const express = require("express");
const router = express.Router(); // Use Router instead of app
// const { GoogleGenAI, createUserContent, createPartFromUri } = require("@google/genai");
const { GoogleGenAI, createUserContent, createPartFromBase64 } = require("@google/genai");

const multer = require('multer');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Configure multer for handling file uploads
const storage = multer.memoryStorage(); // Store the file in memory as a buffer
const upload = multer({ storage: storage });

// Sample route
console.log("Image Router loaded ✅"); // <--- Add this
router.get("/", (req, res) => {
    res.send("Hello this is the image router!");
});


// Route to handle image upload
router.post('/upload-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided.' });
    }
  
    // 🔹 Convert image buffer to Base64
    const base64Image = req.file.buffer.toString("base64");

    // 🔹 Send Image to Gemini AI
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        createUserContent([
          "Give the names of vegetables in the image.and if there is no vegetable, say 'No vegetables', not give any other extra information except vegetable.",
          createPartFromBase64(base64Image, req.file.mimetype), // ✅ Correct method
        ]),
      ],
    });

    //  Extract response text safely
    const resultText =
      response?.candidates?.[0]?.content?.parts?.[0]?.text || "No AI response.";

    // 🔹 Send response to frontend
    res.json({
      message: "Image analyzed successfully!",
      ai_response: resultText,
    });

  } catch (error) {
    console.error("❌ Error during image processing:", error);
    res.status(500).json({ message: "Failed to analyze image.", error: error.message });
  }
});


// Export the router
module.exports =  router; // <--- Export the router;