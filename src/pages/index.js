// pages/index.js
import React from "react";
import Navbar from "../components/Navbar"
import Home from "@/components/Home";
import QuizPage from "./quiz";
 
const HomePage = () => {
  return (
    <div>
      <Home />      
    </div>
  );
};

export default HomePage;


//Big picture for latest quiz
// 2x3 container with links to other quizzes