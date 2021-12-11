export function sortItems (pattern, items){
    let productsListBySort;
    switch (pattern){
        case 'name':
            productsListBySort = items.sort((a,b) => {
                return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0;
            })
            break;
        case 'id':
        case 'no sort':
            productsListBySort = items.sort((a,b) => {
                return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
            })
            break;
        case 'price':
            productsListBySort = items.sort((a,b) => {
                return Number.parseFloat(a.price) > Number.parseFloat(b.price) ? 1 : Number.parseFloat(a.price) < Number.parseFloat(b.price) ? -1 : 0;
            })
            break;
        default:
            productsListBySort = [...items]
            break;
    }
    return {products: productsListBySort, sortBy: pattern};
}
