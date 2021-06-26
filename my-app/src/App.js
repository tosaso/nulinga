import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Forms from './components/forms/Forms'
import Graf from './img/ilustracion.png'

function App() {
  return (
    <>
    <Header />
    <div className="body">
      <img src={Graf} className="ilustracion half" alt="ilustración"></img>
      <Forms />
    </div>
    </>
  );
}

export default App;
