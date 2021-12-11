import {DELETE_PRODUCT} from "./typeActions";
import {deleteItem} from "../services/service_deleteItem";

export const deleteProduct = (id) => (dispatch) => {
    let productsList = JSON.parse(localStorage.getItem('products'));
    let data = deleteItem(id, productsList);
debugger
    dispatch({
        type: DELETE_PRODUCT,
        payload: data
    })
}
