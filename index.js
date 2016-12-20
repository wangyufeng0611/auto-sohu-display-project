/**
 * Created by yufengwang002227 on 2016/12/7.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import update from 'react/lib/update';
import Header from './components/header';
import Body from  './components/body';

// React component
class Counter extends React.Component {
	render(){
        return (
            <div>
                <Header/>
                <Body/>
            </div>
        );
    }
}

// Reducer:
const initialState = {
    count: 0,
    weather: {},
    searchInfo: ""
};
function counter(state=initialState, action) {
    switch(action.type){
        case 'changesearch':
        {
            return update(state, { $merge: {searchInfo: action.newsearchstr}});
        }
        case 'clicksearch':
        {
            return update(state, { $merge: {weather: action.weather}});
        }
        default:
            return state;
    }
}

// Store:
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(counter);

// Map Redux state to component props
function mapStateToProps(state)  {
    return {
        data: state
    };
}


// Connected Component:
let App = connect(
    mapStateToProps
)(Counter);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
