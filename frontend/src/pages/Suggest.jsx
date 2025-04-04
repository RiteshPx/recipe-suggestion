import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const Suggest = () => {
    const [msg, setMsg] = useState('');
    const [image, setImage] = useState(null);
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false); // Loading state
    const handleMsgChange = (e) => {
        setMsg(e.target.value);
    };
    const navigate = useNavigate();

    const handleSend = async (e) => {
        e.preventDefault();
        if (!msg && !image) {
            // If both msg and image are empty, show an alert
            alert("Please enter an ingredient or upload an image.");
            return;
        }
        if (!msg) {
            try {
                setLoading(true); // Set loading to true when request starts
                const formData = new FormData();
                formData.append("image", image); // Append the image file to the form data
                const res = await axios.post("http://localhost:4000/images/upload-image", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                console.log("Image upload response:", res.data); // Log the response from the server
              
                var aiRes=res.data.ai_response;
                if(aiRes.includes("No vegetables")) {
                    alert("No vegetables found in the image. Please enter ingredients manually.");
                    setLoading(false); // Stop loading on error
                    return;
                }
                setMsg(res.data.ai_response);
            } catch (error) {
                console.error("Error uploading image:", error);
                alert("Error uploading image. Please try again.");
                setLoading(false); // Stop loading on error
                return;
            }
        }
        // while(!msg){console.log("Waiting for msg to be set...")}
        console.log("Message after image upload:", msg); // Log the message after setting it
        const newmsg = `I have the following ingredients: ${msg? msg: aiRes} Suggest possible recipes using these ingredients.
    Return the response as in single array of objects where each object contains:
    recipe_name (name of the dish)
    ingredients (array of required ingredients)
    instructions (step-by-step instructions)
    health_score (optional, if available, based on ingredient nutrition)
    If no valid recipe can be found, return { "error": "not found" } instead.`;

        try {
            const response = await axios.post('http://localhost:4000/ask-ai', { userMessage: newmsg });
            console.log("Raw response data:", response.data); // Log raw response

            let data = response.data.result;
            if(data.includes("not found")){
                alert("No recipes found. Please try again with different ingredients.");
                setLoading(false); // Stop loading on error
                return;
            }
            // If the result is a string (e.g., JSON with extra quotes), parse it
            if (typeof data === 'string') {
                // Remove ```json and ``` markers, plus any surrounding whitespace/newlines
                data = data.replace(/```json\s*|\s*```/g, '').trim();
                try {
                    data = JSON.parse(data); // Parse the cleaned string
                } catch (parseError) {
                    console.error("Error parsing response data:", parseError);
                    console.log("Cleaned but unparseable data:", data);
                    setResponse({ error: "Invalid response format" });
                    setLoading(false); // Stop loading on error
                    return;
                }
            }

            console.log("Processed data:", data); // Log cleaned data
            setResponse(data); // Set the cleaned data to state
            navigate('/recipt', { state: data }); // Pass the cleaned data to the next route
        } catch (error) {
            console.error("Error fetching recipes:", error);
            setResponse({ error: "Something went wrong" });
        } finally {
            setLoading(false); // Stop loading when request completes
        }
    };

    // Handle file selection
    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f76d4ef7]">
            <Navbar></Navbar>
            <div>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                        Search your recipe here
                    </h1>
                    <form onSubmit={handleSend} className="space-y-4">
                        <input
                            type="textarea"
                            placeholder="Enter ingredient"
                            value={msg}
                            onChange={handleMsgChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                        <h3>OR</h3>
                        <input type="file" onChange={handleFileChange} className="mb-3" />

                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? 'Loading...' : 'Get Recipe'} {/* Show loading text */}
                        </button>
                    </form>
                    {loading && (
                        <p className="text-center text-gray-500 mt-4">Fetching recipes, please wait...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Suggest;