import { createSlice } from '@reduxjs/toolkit'



const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProduct:null,
    quantity: 0,
    totalPrice: 0,
    numPrice :0
  },


  reducers: {
    addProductCart: (state, action) => {
      state.quantity = action.payload.quantity;
      state.cartProduct = action.payload;
      state.numPrice = action.payload.totalPrice   ;
    }
  }
})



export const { addProductCart } = cartSlice.actions;
export default cartSlice.reducer;