export function addItem (items){
    const list = Array.from([...items]);
    const newItem = {
        id: Math.floor(Math.random() * 100) + 1,
        name: "",
        description: "",
        price: "0",
        creationDate: new Date().toLocaleDateString(),
        image: 'https://image.flaticon.com/icons/png/512/266/266387.png'
    }
    list.push(newItem);
    return list;
}
