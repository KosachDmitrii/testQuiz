import {UPDATE_PRODUCTS_LIST_BY_SEARCH} from "./typeActions";
import {searchItem} from "../services/service_search";

export const updateProductsListBySearch = (pattern) => (dispatch) => {
    let productsList = JSON.parse(localStorage.getItem('products'));
    let data = searchItem(pattern, productsList, 'name');

    dispatch({
        type: UPDATE_PRODUCTS_LIST_BY_SEARCH,
        payload: data
    })
}
