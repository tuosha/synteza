import React, {Component} from 'react'
import './search-panel.css'

class SearchPanel extends Component {
    state = {
      searchType : "title"
    };
    render (){
        const { searchType } = this.state;
        const placeholder = "Search by " + searchType;
        return (
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search"
                           placeholder={placeholder}
                           onChange={this.onHandleSearch}
                           aria-label="Search" />
                    <div className="btn-group">
                        <button type="button"
                                className="btn btn-info dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                            Search by {searchType}
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item"
                               href="/#"
                               onClick={(e) => {e.preventDefault(); this.changeSearchType('title')}}>
                               by title
                            </a>
                            <a className="dropdown-item"
                               href="/#"
                               onClick={(e) => {e.preventDefault(); this.changeSearchType('author')}}>
                               by author
                            </a>
                        </div>
                    </div>
                </form>
        )
    }
    onHandleSearch = (e) => {
        return this.props.onSearchChange(e.target.value);
    };
    changeSearchType = (type) => {
        this.setState(({searchType : type}))
    }
}




export default SearchPanel