import { useUserContext, useUserToggleContext } from "../UserProvider";

const Hijo = () => {
    const user = useUserContext();
    const cambiaLogin = useUserToggleContext();
    return (
        <div>
            <h2>Componente Hijo</h2>
            <div>
                <button onClick={cambiaLogin}>Cambia Login</button>
            </div>
            {user && <p>Hola {user.nombre}</p>}
        </div>
    );
}

export default Hijo;