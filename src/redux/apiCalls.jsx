import {publicRequest} from "../../src/requestMethods";

import {
    getEstateFailure,
    getEstateStart,
    getEstateSuccess,
    } from "./ProductRedux";

import {
    getUserFailure,
    getUserStart,
    getUserSuccess

} from "./userRedux";


export const getEstate = async (dispatch) => {
    dispatch(getEstateStart());
    try {
        const res = await publicRequest.get("/getdoc");
        console.log(res.data.user);
        dispatch(getEstateSuccess(res.data.user));
    }catch (err) {
        dispatch(getEstateSuccess());
    }
}