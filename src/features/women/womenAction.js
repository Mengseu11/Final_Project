import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWomen = createAsyncThunk("women/fetchWomen",
    async ()=> {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json()
            console.log("Fetched API Data:", data);
            return data
        } catch (error) {
            console.error("API Fetch Error:", error);
            throw error
        }
    }
)