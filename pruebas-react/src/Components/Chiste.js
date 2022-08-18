import React from 'react';

const Chiste = (props) => {
    return (
        <div>
            {props.linea && <h2>Línea: {props.linea}</h2>}
            <h3>Punchline: {props.punchline}</h3>
        </div>
    );
}

export default Chiste;
