import React from 'react';
import './App.css';
import {ReactComponent as Cancel} from './cancel.svg';

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
      setSelection("The selected name is: " + randomElem);
    }
  }
  
  return (
    <div className='mainDiv'>
      <h1>Random Name Picker</h1>
      <form className='submitNames'>
        <label htmlFor="textBox">Input Name: </label>
        <input id="nameBox" type="text" value={input} onChange={handleChange}/>
        &nbsp;
        <button id="addName" type="button" onClick={ () => handleAddName(input)}>
          Submit
        </button>
      </form>

      <div className="box">
        <h2>Names</h2>
        <List
              className='nameList'
              list={names}
              onRemoveItem={handleRemoveName}
        />
      </div>
      <button id="pickName" type="button" onClick={handleSelectRandom}>Pick Name</button>
      <p className="selection">{selection}</p>
    </div>
    
  ); 
}

const List = ({ list, onRemoveItem }) =>
  list.map(item => (
    <Item
      className='listedName'
      key={item.id}
      item={item}
      onRemoveItem={onRemoveItem}
    />
));

const Item = ({item, onRemoveItem}) => (
  <div className='enteredNames'>
    <span className='nameText'>{item.name}</span>

    <span>
      <button className='dismissButton' type="button" onClick={() => onRemoveItem(item)}>
        <Cancel height="18px" width="18px" backgroundcolor="transparent"/>
      </button>
    </span>
  </div>
  
)


export default App;
