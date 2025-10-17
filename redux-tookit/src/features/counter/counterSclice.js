import {createSlice} from "@reduxjs/toolkit"
export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        marks:0,
        stu_name:"",

    },
    reducers:{
        inc:(state)=>{state.marks+=1},
        dec:(state)=> {state.marks-=1},
        incByValue:(state,action)=>{state.marks+=action.payload},
        addName:(state,action)=>{state.stu_name=action.payload}

    }
})
export const {inc,dec,incByValue, addName}= counterSlice.actions
export default counterSlice.reducer