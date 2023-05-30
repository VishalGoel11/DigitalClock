import './App.css';
import { useState } from 'react';
function App() {
  let date=new Date().toLocaleTimeString();
  const [currTime,setCurrTime]=useState(date);
  setInterval(()=>{
    date=new Date().toLocaleTimeString();
    setCurrTime(date);
  },1000)
    return (
   <>
    <div className='App-header'>{currTime}<h1> Digital Clock </h1></div>
   </>
  );
}

export default App;
