import createReducer from '../createReducer';
import Types from './types';

const initialState = {
    token: null,
    result : null,
    history : [],
    inserttime : []
    
};

export default createReducer(initialState, {
    [Types.SETTOKEN]: (state, {payload}) => ({
        ...state,
        token: payload.token
    }),
    [Types.SETUSERTYPE]: (state, {payload}) => ({
        ...state,
        usertype: payload.usertype
    }),
    ['TOKEN']: (state, {payload}) => ({
        ...state,
        token: payload.data
    }),
    ['LOGIN']: (state, {payload}) => ({
        ...state,
        result: payload.data
    }),
    ['GETHISTORY']: (state, {payload}) => ({
        ...state,
        history: payload.data,
        inserttime : [],
    }),
    ['INSERTTIME']: (state, {payload}) => ({
        ...state,
        inserttime: payload.data
    })  
})