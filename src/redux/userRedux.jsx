import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"userDetail",
    initialState:{
        userDetails:[],
        currentuser:null,
        isFetching:false,
        error:false,
    },
    reducers : {
     // get workers
     getUserStart: (state) => {
        state.isFetching = true;
        state.error = false;
       },
       getUserSuccess: (state,action) =>{
           state.isFetching = false;
           state.userDetails = action.payload;
          },
          getUserFailure: (state) =>{
           state.isFetching = false;
           state.error= true;
          },
       
    }
});

export const {
    getUserFailure,
    getUserStart,
    getUserSuccess
} = userSlice.actions;
export default userSlice.reducer;