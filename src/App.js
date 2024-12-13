import React from 'react';
import Header from './components/Header';
import "./App.css";
import Home from './components/Home/Home';

function App() {
  return (
    <div className='container'>
     <Header />
     <Home />
    </div>
  );
}

export default App;