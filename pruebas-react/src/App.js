import './App.css';
import React from 'react';
import Chiste from './components/Chiste';
import arrayChistes from './data/chistesData'

function App() {

  return (
    <>
      {arrayChistes.map(chiste=>{
        return <Chiste key={chiste.id} linea={chiste.linea} punchline={chiste.punchline} />
      })}
    </>
  );
}

export default App;