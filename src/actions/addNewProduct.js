import {ADD_NEW_PRODUCT} from "./typeActions";
import {addItem} from "../services/service_addItem";

export const addNewProduct = () => (dispatch) => {
    let productsList = JSON.parse(localStorage.getItem('products'));
    let data = addItem(productsList);
    dispatch({
        type: ADD_NEW_PRODUCT,
        payload: data
    })
}
