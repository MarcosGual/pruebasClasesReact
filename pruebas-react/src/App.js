import './App.css';
import { useState, createContext } from 'react';
import RelojEffect from './Components/Reloj';
import ClaseContextComponent from './Components/ClaseContextComponent';
import FuncionContextComponent from './Components/FuncionContextComponent';

export const ContextoTema = createContext();

function App() {

  const [temaOscuro, setTemaOscuro] = useState(true);

  function toggleTemas() {
    setTemaOscuro(prevTemaOscuro => !prevTemaOscuro);
  }

  return (
    <>
      <ContextoTema.Provider value={temaOscuro}>
        <button onClick={toggleTemas}>Cambiar Tema</button>
        <FuncionContextComponent />
        <ClaseContextComponent />
      </ContextoTema.Provider>
      <RelojEffect />
    </>
  );
}

export default App;