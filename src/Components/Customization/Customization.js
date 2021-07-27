import React from 'react'
import withCustomView from "../../Decorators/withCustomView";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeViewListConfig, changeViewCompletedBooks} from "../../Actions/actions";

const Customization = ({completedBooks, onChangeViewCompletedBooks, booksViewConfig, onChangeViewListConfig})=> {
    return (
        <React.Fragment>
            <ShowCompletedItems
                completedBooks = {completedBooks}
                onChangeViewCompletedBooks = {onChangeViewCompletedBooks}
            />
            <ItemsViewConfiguration
                booksViewConfig ={booksViewConfig}
                onChangeViewListConfig = {onChangeViewListConfig}/>
        </React.Fragment>
        )
};

const ShowCompletedItems = ({completedBooks, onChangeViewCompletedBooks}) => {
    return (
        <div>
            <h4>Show completed: </h4>
            <div className="form-check">
                <input type="checkbox"
                       className="form-check-input"
                       id="show-completed-items"
                       defaultChecked={completedBooks}
                       onClick={onChangeViewCompletedBooks}/>
                    <label className="form-check-label" htmlFor="show-completed-items">Click me</label>
            </div>
        </div>
    )
};

const ItemsViewConfiguration = ({booksViewConfig, onChangeViewListConfig}) => {
    const booksConfig = Object.entries(booksViewConfig);
    const onHandleChange = (e) => {
        const boxId = e.target.id;
        const checked = e.target.defaultChecked;
        onChangeViewListConfig({boxId, checked})
    };
    const configurationList = booksConfig.map(([key, val]) =>
        <div className="custom-control custom-checkbox" key={key}>
            <input type="checkbox" className="custom-control-input"
                   id={key}
                   defaultChecked={val}
                   onClick={onHandleChange}/>
            <label className="custom-control-label"
                   htmlFor={key}>{key[0].toUpperCase() + key.slice(1, key.length)}</label>
        </div>
    );
    return (
        <div className='configuration-list'>
            <h4>View configuration:</h4>
            {configurationList}
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        completedBooks : state.showCompletedBooks,
        booksViewConfig : state.booksListViewConfig
    }
};
const mapDispatchToPros = (dispatch) => {
    return {
        onChangeViewCompletedBooks : bindActionCreators(changeViewCompletedBooks, dispatch),
        onChangeViewListConfig : bindActionCreators(changeViewListConfig, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToPros)(withCustomView(Customization))
