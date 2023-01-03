const { useState } = React;

const App = () => (
  <GroceryList items={['Coffee', 'Milk', 'Cookies', 'Chocolate', 'Tiramisu']} />
);

const GroceryList = (props) => {

  const onListItemClick = (event) => {
    console.log(event.target.innerText);
  };

  return (
    <ul>
      {props.items.map((item) => (
        <GroceryListItem onClick={onListItemClick} item={item} />
      ))}
    </ul>
  );
}

const GroceryListItem = (props) => {

  // useState takes in the initial state and provides access
  // to its value and a function to update its state
  const [isHovered, setIsHovered] = useState(false);
  const [isCrossed, setIsCrossed] = useState(false);

  const style = {
    textDecoration: isCrossed ? 'line-through' : 'none',
    fontWeight: isHovered ? 'bold' : 'normal'
  };

  return (
    <li style={style}
      onClick={() => {
        props.onClick(event);
        setIsCrossed(!isCrossed);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} >
    {props.item}
    </li>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
