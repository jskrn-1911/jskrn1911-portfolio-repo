import React from 'react';
import Header from './components/Header';
import "./App.css";
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;