import './App.css';
import Input from './Input';
import Display from './Display';
import { useState } from 'react';

function App() {

  const[items, setItems] = useState([]);

  const collectItems = (task) => {
    setItems(
      [
      ...items,
      task
    ]
    )
  }

  const removeItems = (index) => {
    const newItems = items.filter(
      (d, i) => {
        if(i == index){
          return false;
        }else{
          return true;
        }
      }
    )
    setItems(newItems);
  }

  return (
    <div className="flex flex-col min-w-[600px] min-h-[500px] mx-auto">    
          <Input handler ={collectItems}/>
          <button className =" bg-yellow-950 w-[100px] mx-auto shadow-lg p-[10px] text-white mb-[20px] rounded-md" onClick={() => setItems([])} >Remove All</button>

          <Display item = {items} removeHandler= {removeItems}/>
    </div>
  );
}

export default App;
