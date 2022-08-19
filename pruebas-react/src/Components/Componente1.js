import React from 'react';
import Componente2 from './Componente2';

const Componente1 = ({libros}) => {
    return (
        <div>
            <Componente2 libros={libros} />
        </div>
    );
}

export default Componente1;