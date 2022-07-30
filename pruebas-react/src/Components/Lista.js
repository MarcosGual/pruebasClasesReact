import Item from './Item'

const Lista = ({ lista, children }) => (
    <ul>
        {children}
        {lista.map((item) => (
            <Item key={item.objetoID} item={item} />
        ))}
    </ul>
);

export default Lista;