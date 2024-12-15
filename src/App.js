import React from 'react';
import Header from './components/Header';
import "./App.css";
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;