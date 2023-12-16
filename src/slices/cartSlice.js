import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    addtocart: [],
  },
  reducers: {
    increment: (state) => {
     
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { increment } = cartSlice.actions

export default cartSlice.reducer