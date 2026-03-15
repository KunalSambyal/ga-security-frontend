// App.jsx
import React, { useState } from "react"; // Added useState here
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import LoginModal from "./components/LoginModal";
import "./App.css";

function App() {
  // This is our switch! It starts as false (closed).
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div>
      <Header onOpenLogin={() => setIsLoginOpen(true)} />

      <main>
        <Hero />
        <About />
        <Contact />
      </main>

      {/* The modal sits outside the main layout. It listens to the switch. */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}

export default App;
