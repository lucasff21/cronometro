import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './Contador'
import LabelCronometro from './LabelCronometro'
import Botao from './Botao'




function App() {
  return (
    <div>
      <LabelCronometro name="Cronometro"/>
      <Contador/>
      
    </div>
  );
}

export default App;
