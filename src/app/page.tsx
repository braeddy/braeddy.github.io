'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Disabilitato temporaneamente per debug: <LanguageTransition /> */}
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
}
