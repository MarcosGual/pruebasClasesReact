import { useState } from "react";

const Buscar = () => {
    // let terminoBusqueda = '';
    const [terminoBusqueda, setTerminoBusqueda] = useState('');
    //handler evento
    const manejarCambio = (event) => {
        console.log(event);
        console.log(event.target.value);

        // terminoBusqueda = event.target.value;
        setTerminoBusqueda(event.target.value);
    };

    return (
        <div>
            <label htmlFor="buscar">Buscar: </label>
            <input id="buscar" type="text"
                onChange={manejarBusqueda} />
            <p>
                Buscando <strong>{terminoBusqueda}</strong>...
            </p>
        </div>
    );
};

export default Buscar;