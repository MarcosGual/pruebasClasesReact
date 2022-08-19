import React from 'react';
import Componente3 from './Componente3';

const Componente2 = ({libros}) => {
    return (
        <div>
            <Componente3 libros={libros} />
        </div>
    );
}

export default Componente2;
