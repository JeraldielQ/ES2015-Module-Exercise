const choice = (items) => {
    return items[Math.floor(Math.random() * items.length)];
}

const remove = (items, item) => {
    const index = items.indexOf(item);
    
    if (index !== -1) {
        return items.splice(index, 1)[0]; 
    } else {
        return undefined;
    }
}

export {choice, remove}