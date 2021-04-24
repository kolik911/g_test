import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './container/Header/Header'
import Footer from './container/Footer/Footer'

const App = () => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);

  const addItem = () => {
    const lastEl = arr[arr.length - 1] || 0
    const newArr = [...arr, lastEl + 1]
    setArr(newArr)
  }

  const delItem = i => {
    const filterdArr = arr.filter((_, index) => index !== i );
    setArr(filterdArr)
  }

  return (
    <div className="App">
        <Header />

        <div className="App_Container">
          <p>Count {count}</p>

          <button onClick={() => setCount(count + 1)}>Click</button>

          <button onClick={addItem}>add item to arr</button>

          {arr.map((item, i) => (
            <div className="app_item">
              <p key={item} className={`item name ${item} `}>{item}</p>
              <button onClick={() => delItem(i)}>x</button>
            </div>
          ))}
        </div>

        <Footer footerName="footer name test" />  
    </div>
  );
}

export default App;
