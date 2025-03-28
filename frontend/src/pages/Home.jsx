import React from "react";
import video from "../assets/homeVideo.mp4";
import Navbar from "../shared/Navbar";
import { Link } from "react-router-dom";
import Testimonial from "./Testimonial";

const Home = () => {
  return (

    <div>
      <div className="relative w-full h-screen">
    <Navbar></Navbar>
      

      <video autoPlay loop muted className="background-video w-full absolute h-full object-cover"> 
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-6">Delicious Recipes at Your Fingertips!</h1>
        <h2 className="text-xl mb-6">Find the perfect dish with a single click and elevate your cooking experience.</h2>
        <Link to="/suggest"> 
        <button className="bg-[#fa4918f7]  text-white px-6 py-2 rounded-lg shadow-md">
          Suggest
        </button>
        </Link>
      </div>
    </div>
    <Testimonial></Testimonial>
    </div>
    
  );
};

export default Home;