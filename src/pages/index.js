import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import HomeEngagement from "@/components/HomeEngagement";
import ResearchAreas from "@/components/ResearchArea";
import Awards from "@/components/Award";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh bg-bg-canvas">
      <Head>
        <title>SENET Lab · PSU Phuket</title>
      </Head>
      <Navbar />
      <main id="main">
        <Hero />
        <HomeEngagement />
        <ResearchAreas />
        <Awards />
      </main>
      <Footer />
    </div>
  );
}
