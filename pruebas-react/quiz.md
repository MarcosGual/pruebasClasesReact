### Primer Preguntero

1. Por qué necesitamos importar react ('import React from "react"') en nuestros archivos?

2. Si estuviera en console.log(pagina) en index.js, ¿qué se mostraría?

3. ¿Qué está mal en este código?

const page= (
    <h1>Hola</h1>
    <p>Este es mi sitio!</p>
)

4. ¿Qué significa que algo sea "declarativo" en lugar de "imperativo"?

5. ¿Qué significa que algo sea "componible"?

### Segundo preguntero

1. ¿Qué es un componente React?
Una función que devuelve elementos de React.

2. ¿Qué está mal en el siguiente código?

function miComponente(){
    return(
        <small>Soy un texto pequeño!</small>
    )
}

3. ¿Qué es lo que está mal en este código?

function Header(){
    return(
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )

    ReactDOM.render(Header(), document.getElementById('root'));
}

### Desafío 1

1. Dado el siguiente arreglo, devolver otro pero con los mismos números elevados al cuadrado. Utilizar método de arrays '.map()'.

let numeros = [0, 1, 2, 3, 4, 5];

2. Dado el siguiente arreglo de nombres, devolver otro pero con la primera letra de cada nombre en mayúsculas. También utilizar el método '.map()'.

let nombres = ['matías', 'luciana', 'federico', 'cinthia'];

3. Con el arreglo anterior de nombres, además de devolver los nombres con la primera letra en mayúscula, ponerlos en un string de para que cada nombre se inserte en la siguiente cadena: '<h3>Hola [nombre], bienvenido a la clase!</h3>'

### Tercer preguntero

1. ¿Qué hace el método 'map()'?

Retorna un nuevo array. Lo que sea que retorna de la función callback es ubicado en el mismo índice del nuevo array.
Generalmente tomamos items del array original y los modificamos de alguna manera.

2. ¿Para qué utilizamos el método '.map()' en React?

Convierte un array de datos crudos en un array de elementos JSX que pueden ser mostrados en una página.

3. ¿Por qué utilizar '.map()' es mejor que sólo crear los componentes de forma manual, tipéandolos?

Porque, además de ahorrarnos trabajo, hace a nuestro código más 'autosustentable', y no requiere cambios adicionales cuando sea que los datos cambian.