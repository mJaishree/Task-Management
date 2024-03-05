import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({

    name : "login",
    initialState : {
        isAuth : false,
        arr : []
    },
    reducers : { //update function
        updateAuth : (state,action)=>{
            state.isAuth = action.payload
        },
        updateArr : (state,action)=>{
            state.arr = action.payload
        }
        

    }
})

export default slice.reducer
export const {updateAuth,updateArr} = slice.actions