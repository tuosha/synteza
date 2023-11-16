const onSearch = (items, searched) => {
    if (!searched) return items;
    return items.filter(item =>
        item.title.toLowerCase().indexOf(searched.toLowerCase()) !== -1)
};

export {onSearch}