import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div>
      <Header onOpenLogin={() => setIsLoginOpen(true)} />

      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}

export default App;
