export function deleteItem(pattern, items){
    return items.filter(item => {
        return item.id !== pattern;
    })
}
