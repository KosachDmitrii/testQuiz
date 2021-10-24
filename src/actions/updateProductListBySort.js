import {UPDATE_PRODUCTS_LIST_BY_SORT} from "./typeActions";

export const updateProductsListBySort = (pattern) => (dispatch) => {
    dispatch({
        type: UPDATE_PRODUCTS_LIST_BY_SORT,
        payload: pattern
    })
}
