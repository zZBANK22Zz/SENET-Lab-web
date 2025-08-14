import React from "react";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import ResearchAreas from "@/components/ResearchArea";
import Awards from "@/components/Award";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ResearchAreas />
      <Awards />
      <Footer />
    </div>
  );
}