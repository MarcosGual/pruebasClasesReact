import React from 'react';
import ListaLibros from './ListaLibros';

const Componente3 = ({libros}) => {
    return (
        <div>
            <ListaLibros libros={libros} />
        </div>
    );
}

export default Componente3;
