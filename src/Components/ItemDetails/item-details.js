import React, {Component} from 'react';
import './item-details.css'

class ItemDetails extends Component {
    state = {
        item : null
    };
    componentDidMount() {
        this.update()
    }
    componentDidUpdate(prevProps) {
        if (this.props.selectedItem !== prevProps.selectedItem ||
            this.props.getData !== prevProps.getData)
        {
            this.update();
        }
    }
    update(){
        const {selectedItem, getData} = this.props;
        getData(selectedItem)
            .then(item =>
                this.setState(({ item : item }))
            );
    }

    render(){
        const {item} = this.state;
        if (!item) return <span>Chose an item!</span>;
        return(
            <div className="item-details-card">
                <img src={item.bookCover} alt={item.title} className='item-details-image'/>
                <ul className='item-details list-group'>
                    {
                    React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, { item })
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ItemDetails