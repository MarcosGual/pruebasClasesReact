import './App.css';
import React from 'react';
import RelojEffect from './Components/Reloj';
import Hijo from './Components/Hijo'
import { UserProvider } from './UserProvider';

function App() {

  return (
    <>
      <RelojEffect />
      <UserProvider>
        <Hijo />
      </UserProvider>
    </>
  );
}

export default App;