import React from 'react';

function App() {

  let d = new Date();

  const [input,setInput] = React.useState('');
  const [names,setNames] = React.useState([]);

  const handleChange = event => {
    return(setInput(event.target.value));
  }

  const handleRemoveName = item => {
    const index = names.indexOf(item);
    const newNames = names.splice(index,1);
    
    setNames(newNames);
  };

  const handleAddName = (item) => {
    const newNames = names.concat({id: d.getTime(), name: item});
    setNames(newNames);
  }
  
  return (
    <div>
      <h1>Random Name Picker</h1>

      <label htmlFor="textBox">Input Name: </label>
      <input id="nameBox" type="text" value={input} onChange={handleChange}/>
      &nbsp;
      <button type="button" onClick={ () => handleAddName(input)}>
        Submit
      </button>

    <List
          list={names}
          onRemoveItem={handleRemoveName}
    />
    </div>
    
  ); 
}

const List = ({ list, onRemoveItem }) =>
  list.map(item => (
    <Item
      key={item.id}
      item={item}
      onRemoveItem={onRemoveItem}
    />
));

const Item = ({item, onRemoveItem}) => (
  <div>
    <span>{item.name}</span>

    <span>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </div>
  
)


export default App;
