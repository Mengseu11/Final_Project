import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'

import authReducer from './features/auth/authSlice'
import peopleReducer from './features/people/peopleSlice'
import cartReducer from './features/cart/cartSlice'
import womenReeducer from './features/women/womenSlice'
import Women from './pages/Women'
export const store = configureStore({
  reducer: {
    counter : counterReducer,
    // movie: movieReducer,
    auth : authReducer,
    men : peopleReducer,
    cart: cartReducer,
    women: womenReeducer,
  },  
})