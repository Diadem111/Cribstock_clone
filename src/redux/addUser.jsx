import {createSlice} from "@reduxjs/toolkit";

export const SignUpSlice = createSlice({
    name:"signup",
    initialState:{
        signups:[],
        isFetching:false,
        error:false
    },
    reducers:{
       //  get all
       addUserStart: (state) => {
        state.isFetching = true;
        state.error = false;
       },
       addUserSuccess: (state,action) =>{
           state.isFetching = false;
           state.signups = action.payload;
          },
          addUserEstateFailure: (state) =>{
           state.isFetching = false;
           state.error= true;
          },
          
    }
});


export const {
    addUserStart,
    addUserSuccess,
    addUserFailure,

} = SignUpSlice.actions;
export default SignUpSlice.reducer;