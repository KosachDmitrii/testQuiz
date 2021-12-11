
const products = [
    {id: 1,
        name: "Apple",
        description: "An apple is an edible fruit produced by an apple tree (Malus domestica). ",
        price: "13.50",
        creationDate: "13-09-2021",
        image: "https://image.freepik.com/free-photo/red-apple-with-green-leaf-white-background_1232-3290.jpg?2"
    },
    {id: 2,
        name: "Orange",
        description: "The orange is the fruit of various citrus species in the family Rutaceae. ",
        price: "4.50",
        creationDate: "22-03-2021",
        image: "https://image.freepik.com/free-vector/watercolor-orange-background_52683-10330.jpg"
    },
    {id: 3,
        name: "Banana",
        description: "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.",
        price: "12.30",
        creationDate: "19-07-2021",
        image: "https://image.freepik.com/free-photo/peeled-banana-isolated-white-background-with-clipping-path_88281-97.jpg"
    }
]
localStorage.setItem('products', JSON.stringify(products));

const initialState = {
    products: JSON.parse(localStorage.getItem('products')),
    productCurrent: products[0],
    sortBy: ""
}

export function productsReducer (state = initialState, action){
    switch (action.type){

        case 'UPDATE_PRODUCT_DETAILS':
            localStorage.setItem('products', JSON.stringify(action.payload));
            return {...state, products: action.payload};

        case 'UPDATE_PRODUCTS_LIST_BY_SEARCH':
            return {...state, products: action.payload};

        case 'UPDATE_PRODUCTS_LIST_BY_SORT':
            return {...state, products: action.payload.products, sortBy: action.payload.sortBy};

        case 'UPDATE_PRODUCT_CURRENT':
            return {...state, productCurrent: action.payload};

        case 'ADD_NEW_PRODUCT':
            localStorage.setItem('products', JSON.stringify(action.payload));
          return {...state, products: action.payload};

        case 'DELETE_PRODUCT':
            localStorage.setItem('products', JSON.stringify(action.payload));
            return {...state, products: action.payload, productCurrent: action.payload[0]}

        default:
            return state;
    }
}
