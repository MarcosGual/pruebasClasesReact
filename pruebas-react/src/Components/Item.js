const Item = (props) => (
    <li>
        <span>{props.item.titulo}</span>
        <span>{props.item.temas}</span>
        <span>{props.item.curso}</span>
    </li>
);

export default Item;