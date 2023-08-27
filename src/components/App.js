
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[count,setCount]=useState(0)
  setInterval(()=>{
      setCount(count+1)
  },1000)
return (
  <div>
    <p>you have been on this page {count} seconds.</p>
  </div>
)
}

export default App
