import logo from './logo.svg';
import './App.css';
import Barrabuscador from './Components/BarraBuscador';
import Lista from './Components/Lista';

function App() {
  const clasesReact = [
    {
      titulo: 'React 01',
      temas: 'Intro a React',
      curso: '0322S',
      objetoID: 0,
    },
    {
      titulo: 'React 02',
      temas: 'Componentes y Props',
      curso: '0322S',
      objetoID: 1,
    },
    {
      titulo: 'React 03',
      temas: 'Estado y Hooks',
      curso: '0322S',
      objetoID: 2,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Barrabuscador />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Lista lista={clasesReact}>Esto es una Lista</Lista>
    </div>
  );
}

export default App;
