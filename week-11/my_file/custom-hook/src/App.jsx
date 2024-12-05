import {useState} from "react";
import "./App.css";
import {usePrev} from "./hooks/usePrev";


function App(){
  const [state, setState]=useState(0);
  const prev=usePrev(state);  //old value returned by this


  return (
    <>
      <p>{state}</p>
      <button
      onClick={()=>{
        setState((curr)=> curr +1);
      }}
      >
        Click Me 
      </button>
      <p>The Previous value was {prev}</p>
    </>
  );
}

export default App;