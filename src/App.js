/** بسم الله الرحمن الرحيم */
import React ,{useState}from "react"
import './index.css'
import hooks from "./hooks"

const App = () => {
  const [counter,setCounter] = useState(0)
  const [value,setValue]=useState([])
  const url = BACKEND_URL
  const notes = hooks.useNotes(url)
  const handleClick=()=>{
      setCounter(counter+1)
      setValue(value.concat(counter))
  }
  const noteOne = notes.find(a=> {return a.id === '5a3b920a61e8c8d3f484bdd0'})
    return (
        <>
        <h1 className="container">بسم الله الرحمن الرحيم</h1>
        <p> Hello webPack {counter} clickes</p>
        <button onClick={handleClick}>click</button>
        <p>{value}</p>
        <div>{notes.length} in {url}</div> 
        <div> note one {noteOne&& noteOne.content}</div>
        </>
    )
  }
  
export default App