import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const Suggest = () => {
    const [msg, setMsg] = useState('');
    const [response, setResponse] = useState('');
    const handleMsgChange = (e) => {
        setMsg(e.target.value);
    };
    const navigate = useNavigate();

    const handleSend = async (e) => {
        e.preventDefault();
        const newmsg = `I have the following ingredients: ${msg} Suggest possible recipes using these ingredients.
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
                    return;
                }
            }
    
            console.log("Processed data:", data); // Log cleaned data
            setResponse(data); // Set the cleaned data to state
            navigate('/recipt', { state: data }); // Pass the cleaned data to the next route
        } catch (error) {
            console.error("Error fetching recipes:", error);
            setResponse({ error: "Something went wrong" });
        }
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
                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
                        >
                            Get Recipe
                        </button>
                    </form>

                </div>
            </div>



        </div>
    );
};

export default Suggest;