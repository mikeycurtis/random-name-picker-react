import React from 'react';

function App() {

  let d = new Date();

  const [input,setInput] = React.useState('');
  const [names,setNames] = React.useState([]);
  const [selection, setSelection] = React.useState('');

  const handleChange = event => {
    return(setInput(event.target.value));
  }

  const handleRemoveName = item => {
    setNames(names.filter(n => n !== item));
  };

  const handleAddName = (item) => {
    const newNames = names.concat({id: d.getTime(), name: item});
    setNames(newNames);
    setInput('');
  }

  const handleSelectRandom = () => {
    if(names.length === 0){
      setSelection("No Names To Select From");
    }
    else{
      const randomElem = names[Math.floor(Math.random() * names.length)].name;
      setSelection(randomElem);
    }
  }
  
  return (
    <div>
      <h1>Random Name Picker</h1>

      <label htmlFor="textBox">Input Name: </label>
      <input id="nameBox" type="text" value={input} onChange={handleChange}/>
      &nbsp;
      <button id="addName" type="button" onClick={ () => handleAddName(input)}>
        Submit
      </button>

    <List
          list={names}
          onRemoveItem={handleRemoveName}
    />

      <button id="pickName" type="button" onClick={handleSelectRandom}>Pick Name</button>
      <p>Winner: {selection}</p>
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
