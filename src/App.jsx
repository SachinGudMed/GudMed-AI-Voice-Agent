import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import FunctionalRequirements from "./components/FunctionalRequirements";
import ConversationDemo from "./components/ConversationDemo";
import Benefits from "./components/Benefits";
import Statistics from "./components/Statistics";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 text-gray-900 antialiased selection:bg-primary-200 selection:text-primary-800">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Problem />
        <Solution />
        <HowItWorks />
        <FunctionalRequirements />
        <ConversationDemo />
        <Benefits />
        <Statistics />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
