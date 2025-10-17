// import React, { use } from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import { inc,dec,incByValue, addName} from './features/counter/counterSclice'
// const App = () => {

//   const mycounter=useSelector((state)=>state.counter)
//   const dispatch=useDispatch()
//   return (
//     <>
//     <div>App : {mycounter.marks}</div>
//     <div> {mycounter.stu_name && <p>App :{mycounter.stu_name}</p>}</div>
//     <button onClick={()=>dispatch({type:inc})}>Inc</button>
//     <button onClick={()=>dispatch({type:dec})}>Dec</button>
//     <button onClick={()=>dispatch(incByValue(10))}>inc by 10</button>
//     <button onClick={()=>dispatch( addName("Mrinmoy"))}>Add Mrinmoy</button>
//     </>
//   )
// }

// export default App
// // .hero-details :is(.subtitle,.description){
// //         max-width: 100%;
// //     }
import React from 'react'
import Home from './pages/Home'
import { AddToCard, RemoveToCard } from "./features/addtocard/addtocard";
import { useSelector, useDispatch } from "react-redux";

const App = () => {

    const dispatch = useDispatch();
  return (
    <>
    <Home/>
     <button onClick={()=>dispatch({type:AddToCard})}>+</button>
    </>
  )
}

export default App