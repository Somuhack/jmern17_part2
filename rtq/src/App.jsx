import React, { useState } from "react";
import Showdata from "./pages/Dashboard/Showdata";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AddData from "./pages/Dashboard/AddData";
const App = () => {
  // const [count, setCount] = useState(0);
  // const handleClick = () => {
  //   // setCount(count + 1); // Calculates 0 + 1, passes 1
  //   // setCount(count + 1);
  //   setCount(p=>p+1); // Calculates 0 + 1, passes 1
  //   setCount(p=>p+1);
  //   console.log(count);
  // };
  return (
    // <>
    //   {count}
    //   <button onClick={handleClick}>click</button>
    // </>
    // <div><Showdata/></div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Showdata/>}/>
      <Route path="addata" element={<AddData/>}/>
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;
