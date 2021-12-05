import React from 'react';
import withChildren from "../../Decorators/withChildren";
import ItemList from "../ItemList/item-list";
import compose from "../../Decorators/compose";
import withSearch from "../../Decorators/withSearch";
import withCustomView from "../../Decorators/withCustomView";
import TableList from "../TableList";
import {onSearch} from "../../Utils";

const booksInfo = ( data, config, type ) => {
    const author =  config.author ? data.author: null;
    const publicationDate = config.publicationDate ? data.publicationDate : null;
    const annotation = config.annotation ? data.annotation : null;
    const currentStatus = config.currentStatus ? data.currentStatus : null;
    switch (type) {
        case 'TH' :
            return (
                <tr>
                    <th scope ='col'>{data.id}</th>
                    <th scope ='col'>{data.title}</th>
                    <th scope ='col'>{author}</th>
                    <th scope ='col'>{publicationDate}</th>
                    <th scope ='col'>{annotation}</th>
                    <th scope ='col'>{currentStatus}</th>
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
                    <td>{currentStatus}</td>
                </React.Fragment>
            );
        default :
            return (
                <section>
                    <span><b>{data.title}</b></span>
                    {author ? <span> by : {data.author}</span> : null}
                    {publicationDate ? <span> in : {data.publicationDate}</span> : null}
                    {annotation  ? <span><br/><i>Annotation : {data.annotation}</i></span> : null}
                    {currentStatus ? <span><br/><i>{data.currentStatus}</i></span> : null}
                </section>
            );
    }
};

const composition = (component) => compose(
    withSearch(onSearch),
    withCustomView,
    withChildren(booksInfo)
)(component);

const BooksList = composition(ItemList);
const BooksTableList = composition(TableList);

export {
    BooksList,
    BooksTableList
};