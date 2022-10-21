import { createSlice } from '@reduxjs/toolkit'



const cartSlice = createSlice({
  name: "payment",
  initialState: {
    payment:null,
    amount: 1,
     },


  reducers: {
    addPriceCart: (state, action) => {
      state.amount = action.payload.amount;
      
    }
  }
})



export const { addPriceCart } = cartSlice.actions;
export default cartSlice.reducer;