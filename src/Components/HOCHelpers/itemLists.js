import React from 'react';
import withChildren from "../../Decorators/withChildren";
import ItemList from "../ItemList/item-list";
import withContextData from "../../Decorators/withContextData";
import compose from "../../Decorators/compose";
import withSearch from "../../Decorators/withSearch";
import withCustomView from "../../Decorators/withCustomView";
import TableList from "../TableList";


const booksInfo = ( data, config, type ) => {
    const author =  config.author ? data.author: null;
    const publicationDate = config.publicationDate ? data.publicationDate : null;
    const annotation = config.annotation ? data.annotation : null;
    switch (type) {
        case 'TH' :
            return (
                <tr>
                    <th scope ='col'>{data.id}</th>
                    <th scope ='col'>{data.title}</th>
                    <th scope ='col'>{author}</th>
                    <th scope ='col'>{publicationDate}</th>
                    <th scope ='col'>{annotation}</th>
                </tr>
            );
        case 'TD' :
            return (
                <React.Fragment>
                    <td>{data.id}</td>
                    <td><b>{data.title}</b></td>
                    <td>{author}</td>
                    <td>{publicationDate}</td>
                    <td><i>{annotation}</i></td>
                </React.Fragment>
            );
        default :
            return (
                <p>
                    <span><b>{data.title}</b></span>
                    {author ? <span> by : {data.author}</span> : null}
                    {publicationDate ? <span> in : {data.publicationDate}</span> : null}
                    {annotation  ? <span><br/><i>Annotation : {data.annotation}</i></span> : null}
                </p>
            );
    }
};

const mapDataToProps = (dataApi) => {
    return {
        getData: dataApi.getAllBooks
    }
};

const onSearch = (items, searched) => {
    if (!searched) return items;
    return items.filter(item =>
        item.title.toLowerCase().indexOf(searched.toLowerCase()) > -1)
};

const composition = (component) => compose(
    withContextData(mapDataToProps),
    withSearch(onSearch),
    withCustomView,
    withChildren(booksInfo)
)(component);

const BooksListCompleted = composition(ItemList);
const BooksListPlanned = composition(ItemList);
const BooksTableList = composition(TableList);

export {
    BooksListCompleted,
    BooksListPlanned,
    BooksTableList
};