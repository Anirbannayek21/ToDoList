import { useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const [text, settext] = useState("")
  const [items, setitems] = useState([])

  let value;
  const changeText=(event)=>{
    event.preventDefault();
    value = event.target.value;
    settext(value)
  }

  const save =(event) =>{
    
    setitems((itemValue)=>{
      // itemValue.append(value)
      return [...itemValue,text];
    });
    settext("");
  }

  const deleteItem = (idValue) =>{
    console.log(idValue)
    
    setitems((oldArray)=>{
      return oldArray.filter((arrValue,index)=>{
        return index!==idValue;
      })
    })
  }

  return (
    <div className="back">
      <div className="box">
        <br/>
        <h1 className="heading">ToDo List</h1>
        <br/>
        <input type="text" placeholder="add a item" onChange={changeText} value={text} />
        <button onClick={save}> + </button>

        <ol>
            {items.map((val,index) => {
                return (
                    <List 
                      key = {index}
                      id= {index}
                      textValue={val}
                      onSelect={deleteItem}
                    />
                )
            })}
        </ol>

      </div>
    </div>
  );
}

export default App;
