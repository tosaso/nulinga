import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Forms from './components/forms/Forms'
import Graf from './img/ilustracion.png'

function App() {
  return (
    <>
    <Header />
    <div>
      <img src={Graf} className="ilustracion" alt="ilustración"></img>
      <Forms/>
    </div>
    </>
  );
}

export default App;
