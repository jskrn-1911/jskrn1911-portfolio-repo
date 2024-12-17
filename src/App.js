import "./App.css";
import React from 'react';
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Qualification from "./components/Qualification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;