import React, { Component } from 'react';
import ContextoTema from '../App';

class ClaseContextComponent extends Component {
    estilosTema(dark) {
        return {
            backgroundColor: dark ? '#333' : '#CCC',
            color: dark ? '#CCC' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }

    render() {
        return (
            <ContextoTema.Consumer>
                {temaOscuro=>{
                    return <div style={this.estilosTema(temaOscuro)}>
                        Tema de Clase
                    </div>
                }}
            </ContextoTema.Consumer>
        );
    }
}

export default ClaseContextComponent;