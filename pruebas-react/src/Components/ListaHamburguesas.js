import React from 'react';
import UseAxios from '../hooks/useAxios';

const ListaHamburguesas = () => {
    // const [hamburguesas, setHamburguesas] = useState([]);
    // const [error, setError] = useState({
    //     message: '',
    //     isError: false
    // });
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true);
    //     axios('http://localhost:8080/hamburguesas')
    //         .then(res => setHamburguesas(res.data)) //caso de éxito
    //         .catch(err => setError({
    //             message: err.message,
    //             isError: true
    //         }))
    //         .finally(() => {
    //             setTimeout(() => setIsLoading(false), 2000)
    //         })
    // }, [])

    const {data, isLoading, error} = UseAxios('http://localhost:8080/hamburguesas');

    return (
        <div>
            <h2>Lista de hamburguesas</h2>
            <ul>
                {error.isError ? <h4>{error.message}</h4>
                    : isLoading ? <h4>Cargando...</h4> :
                        data.map(burger => (
                            <li key={burger.id}>{burger.nombre}</li>
                        ))
                }
            </ul>
        </div>
    );
}

export default ListaHamburguesas;