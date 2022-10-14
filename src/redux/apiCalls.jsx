import {publicRequest} from "../../src/requestMethods";

import {
    getEstateFailure,
    getEstateStart,
    getEstateSuccess,
    } from "./ProductRedux";

import {
    addUserStart,
    addUserSuccess,
    addUserFailure,
    loginFailure,
    loginSuccess,
    loginStart,
} from "./userRedux";


// get estate details
export const getEstate = async (dispatch) => {
    dispatch(getEstateStart());
    try {
        const res = await publicRequest.get("/getdoc");
        // console.log(res.data.user);
        dispatch(getEstateSuccess(res.data.user));
    }catch (err) {
        dispatch(getEstateSuccess());
    }
}

// send users
export const sendUser = async (user,dispatch ) => {
    dispatch(addUserStart());
    try {
        const res = await publicRequest.post("/signUp",user);
        console.log(res);
        dispatch(addUserSuccess(res.data.form1));
    }catch (err) {
        dispatch(addUserFailure());
    }
}

// auth
  export const login = async (dispatch,admin,navigate ) => {
    dispatch(loginStart());
    try {
     const res = await publicRequest.post("/userAuth",admin);
     dispatch(loginSuccess(res.data.user));
     navigate("/dashboard");
    } catch (err) {
      dispatch(loginFailure());
    }
  };
