import {DELETE_PRODUCT} from "./typeActions";


export const deleteProduct = (id) => (dispatch) => {
debugger
    dispatch({
        type: DELETE_PRODUCT,
        payload: id
    })
}
