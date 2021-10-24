import {UPDATE_PRODUCT_CURRENT} from "./typeActions";


export const updateProductCurrent = (product) => (dispatch) =>{
    dispatch({
        type: UPDATE_PRODUCT_CURRENT,
        payload: product
    })
}
