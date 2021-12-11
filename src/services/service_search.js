export function searchItem(pattern, items, searchProp){
    return pattern ===""
        ? items : items.filter(item => item[searchProp].toLowerCase().includes(pattern.toLowerCase()) === true
            ? item : ""
    )
}
