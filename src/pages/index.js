import React from "react";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import HomeEngagement from "@/components/HomeEngagement";
import ResearchAreas from "@/components/ResearchArea";
import Awards from "@/components/Award";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HomeEngagement />
      <ResearchAreas />
      <Awards />
      <Footer />
    </div>
  );
}