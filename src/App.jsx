
import './App.css'
import styles from "./App.module.css";
import Display from './Component/Display';
import ButtonsContainer from './Component/ButtonsContainer';
import { useState } from 'react';

function App() {

  const  [calVal,setcalVal] =useState("");
  const onButtonClick=(buttontext)=>
  
  {
    if(buttontext === 'C')
    {
        setcalVal("");


    }
    else if(buttontext === '=')
    {
       const result = eval(calVal);
       setcalVal(result);
       
    }
    else{
      const newDisplay = calVal+buttontext;
      setcalVal(newDisplay);

    }
  }
  

  return (
    <div className="container">
     <div className = {styles.calculater}>
        <Display discalVal={calVal}/>
        
        <ButtonsContainer onButtonClick={onButtonClick}/>

     </div>
   
       </div>
  );

}

export default App
