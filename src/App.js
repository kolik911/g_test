import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);

  const addItem = () => {
    const lastEl = arr[arr.length - 1] || 0
    const newArr = [...arr, lastEl + 1]
    setArr(newArr)
  }

  return (
    <div className="App">
        <p>Count {count}</p>

        <button onClick={() => setCount(count + 1)}>Click</button>

        <button onClick={addItem}>add item to arr</button>

        {arr.map(item => <p key={item} className={`item name ${item}`}>{item}</p>)}
    </div>
  );
}

export default App;
