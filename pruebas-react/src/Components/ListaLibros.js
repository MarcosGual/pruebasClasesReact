import React from 'react';

const ListaLibros = ({ libros }) => {
    return (
        <div className='lista--libros'>
            <h2>Lista de Libros</h2>
            <ul>
                {libros.map(libro => {
                    return <li key={libro.id}>Libro: {libro.nombre} - ${libro.precio}</li>
                })}
            </ul>
        </div>
    );
}

export default ListaLibros;
