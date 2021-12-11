export function updateItem (pattern, items){
    return items.map(item => {
        return item.id === pattern.id ? pattern : item;
    })
}
