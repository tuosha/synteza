import {createStore, applyMiddleware} from 'redux'
import reducer from '../Reducers/reducer'
import thunkMiddleware from 'redux-thunk'

const logMiddleware = (store) => (dispatch) => (action) => {
    console.log(action.type);
    console.log(store.getState());
    return dispatch(action)
};
const strMiddleware = () => (dispatch) => (action) => {
    if (typeof action ==='string') {
        return dispatch({
            type : action
        })
    }
    return dispatch(action)
};

const store = createStore(reducer, applyMiddleware(strMiddleware, logMiddleware, thunkMiddleware));

export default store
