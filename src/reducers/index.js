/**
 * Created by yuxy on 2017/08/25
 */
import { combineReducers } from 'redux';
import * as type from '../actions/type';

const handleData = (state = {isFetching: true, data: {}}, action) => {
    console.log('====================================');
    console.log('handleData', state, action);
    console.log('====================================');
    switch (action.type) {
        case type.REQUEST_DATA:
            return {...state, isFetching: true};
        case type.RECEIVE_DATA:
            return {...state, isFetching: false, data: action.data};
        default:
            return {...state};
    }
};

const httpData = (state = {}, action) => {
    console.log('====================================');
    console.log('httpData', state, action);
    console.log('====================================');
    switch (action.type) {
        case type.REQUEST_DATA:
        case type.RECEIVE_DATA:    
            return {
                ...state,
                [action.category]: handleData(state[action.category], action)
            };
        default:
            return {...state};
    }
};

export default combineReducers({
    httpData
});