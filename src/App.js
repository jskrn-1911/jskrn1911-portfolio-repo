import "./App.css";
import React from 'react';
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Qualification from "./components/Qualification";

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
      </main>
    </>
  );
}

export default App;