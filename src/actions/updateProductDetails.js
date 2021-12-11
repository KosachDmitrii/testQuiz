import {UPDATE_PRODUCT_DETAILS} from "./typeActions";
import {updateItem} from "../services/service_updateItem";


export const updateProductDetails = (product) => (dispatch) =>{
    let productsList = JSON.parse(localStorage.getItem('products'));
    let data = updateItem(product, productsList);
    dispatch({
        type: UPDATE_PRODUCT_DETAILS,
        payload: data
    });
}
