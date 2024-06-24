import React, { useState } from 'react';
import Home from './pages/home/Home';
import './App.css';


function App() {
  const [valor, setValor] = useState(0);
  function handleClick() {
    setValor(valor +  1);
  }

  return (
    <>
      <Home 
      title = "Componente Home"
      description='Este é um componente Home que recebe props.'
      />
      <hr/>

      <div>
        <h1 className='titulo'>App</h1>
        <p className='texto'>O valor é: {valor}</p>
        <button onClick={handleClick}>Adicionar 1</button>
      </div>
      <hr/>

      <div>
      
      </div>
   </>
  );
}

export default App;