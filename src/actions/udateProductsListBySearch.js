import {UPDATE_PRODUCTS_LIST_BY_SEARCH} from "./typeActions";

export const updateProductsListBySearch = (pattern) => (dispatch) => {
    dispatch({
        type: UPDATE_PRODUCTS_LIST_BY_SEARCH,
        payload: pattern
    })
}
