import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Componente1 from './components/Componente1';
import PalancaTemas from './components/PalancaTemas';

function App() {

  const [libros, setLibros] = useState([
    {
      id: 1000,
      nombre: 'El código Da Vinci',
      autor: 'Dan Brown',
      precio: 3000
    },
    {
      id: 1001,
      nombre: 'Angeles y Demonios',
      autor: 'Dan Brown',
      precio: 4000
    },
    {
      id: 1002,
      nombre: 'Hombres sin Mujeres',
      autor: 'Murakami',
      precio: 3500
    }
  ]);

  return (
    <div className='App'>
      <NavBar tema='dark' />

      <Componente1 libros={libros} tema='dark' />

      <PalancaTemas tema='dark' />
    </div>
  );
}

export default App;