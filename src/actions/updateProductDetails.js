import {UPDATE_PRODUCT_DETAILS, UPDATE_PRODUCTS_LIST_BY_SORT} from "./typeActions";


export const updateProductDetails = (product, pattern) => (dispatch) =>{
    dispatch({
        type: UPDATE_PRODUCT_DETAILS,
        payload: product
    });
    dispatch({
        type: UPDATE_PRODUCTS_LIST_BY_SORT,
        payload: pattern
    })

}
