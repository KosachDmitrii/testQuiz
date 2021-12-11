import {UPDATE_PRODUCTS_LIST_BY_SORT} from "./typeActions";
import {sortItems} from "../services/service_sort";

export const updateProductsListBySort = (pattern) => (dispatch) => {
    let productsList = JSON.parse(localStorage.getItem('products'));
    let data =sortItems(pattern, productsList);

    dispatch({
        type: UPDATE_PRODUCTS_LIST_BY_SORT,
        payload: data
    })
}
