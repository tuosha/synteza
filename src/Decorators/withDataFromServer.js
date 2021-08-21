import React, {Component} from 'react';
import Spinner from "../Components/Spinner";

const withDataFromServer = (Wrapped) => {
    return class extends Component {
        state = {
            data: null
        };
        componentDidMount() {
            this.update();
        }
        componentDidUpdate(prevProps) {
            if(this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        update() {
            this.props.getData()
                .then(data =>
                    this.setState(({ data : data}))
                );
        }
        render() {
            const {data} = this.state;
            if (!data) return <Spinner/>;
            return (
                <Wrapped {...this.props} data={data}/>
            )
        }
    }
};
export default withDataFromServer