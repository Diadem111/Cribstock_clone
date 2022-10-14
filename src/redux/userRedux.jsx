import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"userDetail",
    initialState:{
        userDetails:[],
        currentuser:null,
        isFetching:false,
        error1:false,
    },
    reducers : {
     // get workers
     addUserStart: (state) => {
        state.isFetching = true;
        state.error1 = false;
       },
       addUserSuccess: (state,action) =>{
           state.isFetching = false;
           state.userDetails.push(action.payload);
          },
          addUserFailure: (state) =>{
           state.isFetching = false;
           state.error1= true;
          },  
          loginStart :(state) => {
            state.isFetching = true;
        },
        loginSuccess:(state,action) => {
        state.isFetching = false;
        state.currentuser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error1 = true;
        },
        logout :(state) => {
            state.currentuser = null
        },

    }
});

export const {
    addUserStart,
    addUserSuccess,
    addUserFailure,
    loginFailure,
    loginSuccess,
    loginStart
} = userSlice.actions;
export default userSlice.reducer;