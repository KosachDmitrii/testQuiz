
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
    let productsList = JSON.parse(localStorage.getItem('products'));
    switch (action.type){

        case 'UPDATE_PRODUCT_DETAILS':
            const list = productsList.map(product => {
                return product.id === action.payload.id ? action.payload : product;
            })
            localStorage.setItem('products', JSON.stringify(list));
            return {...state, products: list};

        case 'UPDATE_PRODUCTS_LIST_BY_SEARCH':
            if(action.payload ===""){
                return {...state, products: productsList};
            }
            const productsListBySearch = productsList.filter(product => {
                return product.name.toLowerCase().includes(action.payload.toLowerCase()) === true ? product : ""
            })
            return {...state, products: productsListBySearch};

        case 'UPDATE_PRODUCTS_LIST_BY_SORT':
            let productsListBySort = [];
            switch (action.payload){
                case 'name':
                    productsListBySort = productsList.sort((a,b) => {
                        return a.name > b.name ? 1 : -1;
                    })
                    return {...state, products: productsListBySort, sortBy: action.payload};
                case 'id':
                case 'no sort':
                    productsListBySort = productsList.sort((a,b) => {
                        return a.id > b.id ? 1 : -1;
                    })
                    return {...state, products: productsListBySort, sortBy: action.payload};
                case 'price':
                    productsListBySort = productsList.sort((a,b) => {
                        return Number.parseFloat(a.price) > Number.parseFloat(b.price) ? 1 : -1;
                    })
                    return {...state, products: productsListBySort, sortBy: action.payload};
                default:
                    return state;
            }

        case 'UPDATE_PRODUCT_CURRENT':
            return {...state, productCurrent: action.payload}

        case 'ADD_NEW_PRODUCT':
            const newList = Array.from([...productsList]);
            newList.push(action.payload)
            localStorage.setItem('products', JSON.stringify(newList));
          return {...state, products: newList}

        case 'DELETE_PRODUCT':
            const newDeleteList = productsList.filter(product => {
                return product.id !== action.payload;
            })
            localStorage.setItem('products', JSON.stringify(newDeleteList));
            return {...state, products: newDeleteList, productCurrent: newDeleteList[0]}

        default:
            return state;
    }
}
