import { useState } from "react";

const Testimonials = () => {
  const features = [
    { title: "AI-Powered Recipes", description: "Get personalized recipes based on available ingredients.", icon: "🤖" },
    { title: "Healthy Choices", description: "Suggests nutritious meal options tailored to your diet.", icon: "🥗" },
    { title: "Quick & Easy", description: "Find recipes that are simple and fast to prepare.", icon: "⚡" },
    { title: "No Wastage", description: "Utilizes leftover ingredients to minimize food waste.", icon: "♻" }
  ];

  const [selected, setSelected] = useState(1);

return (
    <div className="flex justify-center space-x-4 mt-24 mb-24 mr-8 ml-8">
        {features.map((item, index) => (
            <div
                key={index}
                onClick={() => setSelected(index)}
                className={`p-6 rounded-lg shadow-lg transition-all cursor-pointer 
                    ${selected === index ? "bg-[#fa4918f7] text-white" : "bg-[#fbc4b0] text-[#7a2e1c]"}`}
            >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
            </div>
        ))}
    </div>
);
};

export default Testimonials;