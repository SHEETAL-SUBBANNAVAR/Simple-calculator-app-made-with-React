import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";


function App() {
  const [calVal , setCalVal] = useState("");
  const onButtonClick =(buttonText)=>{
    if(buttonText === 'C'){

      setCalVal("");
    }
    else if(buttonText === '='){
      try {
        setCalVal(eval(calVal).toString());
      } catch {
        setCalVal("Error");
     }
    }

    else{
      const newDisplayValue =calVal + buttonText;
      setCalVal(newDisplayValue)
    }                                
  }
  return (
    <div className={styles.calculator}>
      <Display DisplayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick} ></ButtonsContainer>
    </div>
  );
}

export default App; 
