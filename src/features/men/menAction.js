import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchMen = createAsyncThunk("men/fetchMen", async () => {
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
        const data = await response.json();

        console.log("Fetched API Data:", data); 
        return data; 
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
    }
});
