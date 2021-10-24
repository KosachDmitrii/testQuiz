import {ADD_NEW_PRODUCT} from "./typeActions";

export const addNewProduct = () => (dispatch) => {

    dispatch({
        type: ADD_NEW_PRODUCT,
        payload:
            {
                id: Math.floor(Math.random() * 100) + 1,
                name: "",
                description: "",
                price: "0",
                creationDate: new Date().toLocaleDateString(),
                image: 'https://image.flaticon.com/icons/png/512/266/266387.png'
            }
    })
}
