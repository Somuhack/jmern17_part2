import {configureStore} from "@reduxjs/toolkit"
import counterSclice from "../features/counter/counterSclice"
import  addToCardSlice  from "../features/addtocard/addtocard"

export const store = configureStore({
    reducer:{
        counter:counterSclice,
        addtocart:addToCardSlice
    }
})