// pages/index.js
import React from "react";
import Link from 'next/link'; // Import Link component for navigation
import Navbar from "../components/Navbar"
import Home from "@/components/Home";
import QuizPage from "./quiz";

const HomePage = () => {
  return (
    <div>
      <Home />
      <h1>Welcome to My Quiz App!</h1>
    </div>
  );
};

export default HomePage;
