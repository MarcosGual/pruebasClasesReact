import React, { useState, useContext } from "react";

//creamos el contexto usuario
const userContext = React.createContext();
//creamos el contexto para el botón
const userToggleContext = React.createContext();

export function useUserContext(){
    return useContext(userContext);
}

export function useUserToggleContext(){
    return useContext(userToggleContext);
}

export function UserProvider(props) {
    const [user, setUser] = useState(null);

    const cambiaLogin = () => {
        if (user) {
            setUser(null);
        } else {
            setUser({
                nombre: 'Marcos',
                email: 'marcos@numen.com.ar'
            })
        }
    }
    return (
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={cambiaLogin}>
                {props.children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}