import {createSlice} from "@reduxjs/toolkit";

export const EstateSlice = createSlice({
    name:"owner",
    initialState:{
        owners:[],
        isFetching:false,
        error:false
    },
    reducers:{
       //  get all
       getEstateStart: (state) => {
        state.isFetching = true;
        state.error = false;
       },
       getEstateSuccess: (state,action) =>{
           state.isFetching = false;
           state.owners = action.payload;
          },
          getEstateFailure: (state) =>{
           state.isFetching = false;
           state.error= true;
          },
    }
});


export const {
    getEstateStart,
    getEstateSuccess,
    getEstateFailure,

} = EstateSlice.actions;
export default EstateSlice.reducer;