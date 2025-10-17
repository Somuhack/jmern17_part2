import {createSlice} from "@reduxjs/toolkit"
export const addToCardSlice = createSlice({
    name:"addtocard",
    initialState:{
      cart:0

    },
    reducers:{
        AddToCard:(state)=>{state.cart+=1},
        RemoveToCard:(state)=> {state.cart-=1},
        // incByValue:(state,action)=>{state.marks+=action.payload},
        // addName:(state,action)=>{state.stu_name=action.payload}

    }
})
export const {AddToCard,RemoveToCard}= addToCardSlice.actions
export default addToCardSlice.reducer