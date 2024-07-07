// 删除table中的一行
const deleteItem = (arr, id) => {
    return arr.filter(item => item.id !== id);
}


const addItem = (arr, item) => {
    return [...arr, item];
}

const sortOrder = (arr, config) => {
    const {direction} = config;
    return [...arr].sort((a, b) => {
        const multiplier = direction === 'asc' ? 1 : -1;
        return (b.age - a.age) * multiplier;
    })
}

const updateItemName = (arr, item, value)=>{
    return arr.map(d=>d.id === item.id ? {...item, name: value} : d)
}

export {deleteItem, addItem, sortOrder, updateItemName} ;