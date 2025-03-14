import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchMen = createAsyncThunk("men/fetch",

//     async () => {
//     try{
//         console.log("Fetching API...");
//         let response = await fetch(`https://dummyjson.com/products/category/mens-shirts?api_key=e23f92d8f170ad2fa576190611936eff`)
//         return response.json()
//     }catch(error){
//         return Promise.reject(error)
//     }
      
// });
export const fetchMen = createAsyncThunk("men/fetchMen", async () => {
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
        const data = await response.json();

        console.log("Fetched API Data:", data); // ✅ Debugging API response
        return data; // Make sure this matches your API response structure
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
    }
});
