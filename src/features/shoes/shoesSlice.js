import { createSlice } from "@reduxjs/toolkit";
import { fetchShoes } from "./shoesAction";

const initialState = {
    data: {},
    status : "",
    error : null,
} 
export const shoesSlice = createSlice ({
    name : "shoes",
    initialState,
    reducers : {},
    extraReducers:(builder)=>{
        builder 
            .addCase(fetchShoes.fulfilled, (state,action)=>{
                state.status= "SUCCED"
                state.data = action.payload
            })
            .addCase(fetchShoes.pending, (state,action)=>{
                state.status = "PENDING"
                state.error = null
            })
            .addCase(fetchShoes.rejected,(state,action)=>{
                state.status = "ERROR"
                state.error = action.error.message
            })

    }
})
export default shoesSlice.reducer