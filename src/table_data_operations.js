// 删除table中的一行
const deleteItem = (arr, id) => {
    return arr.filter(item => item.id !== id);
}

// 新增 table中的一行
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

const updateItemName = (arr, item, value) => {
    return arr.map(d => d.id === item.id ? {...item, name: value} : d)
}

const updateItemEmail = (arr, item, value) => {
    return arr.map(d => d.id === item.id ? {...item, email: value} : d)
}

const updateItemAddress = (arr, item, value) => {
    return arr.map(d => d.id === item.id ? {...item, address: value} : d)
}

const updateItem = (arr, field, item, value) => {
    switch (field) {
        case 'name':
            return updateItemName(arr, item, value);
        case 'email':
            return updateItemEmail(arr, item, value);
        case 'address':
            return updateItemAddress(arr, item, value);
    }
}


export {deleteItem, addItem, sortOrder, updateItem} ;