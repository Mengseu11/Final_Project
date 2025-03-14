import { createSlice } from "@reduxjs/toolkit";
import { fetchWomen } from "./womenAction";

const initialState = {
    data: {},
    status : "",
    error : null,
} 
export const womenSlice = createSlice ({
    name : "women",
    initialState,
    reducers : {},
    extraReducers:(builder)=>{
        builder 
            .addCase(fetchWomen.fulfilled, (state,action)=>{
                state.status= "SUCCED"
                state.data = action.payload
            })
            .addCase(fetchWomen.pending, (state,action)=>{
                state.status = "PENDING"
                state.error = null
            })
            .addCase(fetchWomen.rejected,(state,action)=>{
                state.status = "ERROR"
                state.error = action.error.message
            })

    }
})
export default womenSlice.reducer