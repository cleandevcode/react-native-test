import { useApi } from '../../service/api';
import Types from './types';
import { useDispatch } from 'react-redux';

export function setToken(token) {
    return {
        type: Types.SETTOKEN,
        payload: {token}
    }
}

export function login(data) {
    return {
        type: "LOGIN",
        payload: {data}
    }
}

export function gethistory(data) {
    return {
        type: "GETHISTORY",
        payload: {data}
    }
}

export function insertTime(data) {
    return {
        type: "INSERTTIME",
        payload: {data}
    }
}

export function token(data) {
    return {
        type: "TOKEN",
        payload: {data}
    }
}


export function createAccount() {
    const api = useApi();
    const dispatch = useDispatch();
    return async (data) => {
        const info = await api.signup(data);
    }
}

export function Login() {
    const api = useApi();
    const dispatch = useDispatch();
    return async (data, token) => {
        const info = await api.signin(data,token);
        console.log(info);
        dispatch(login(info));
    }
}

export function GetToken() {
    const api = useApi();
    const dispatch = useDispatch();
    return async (data, type) => {
        const info = await api.gettoken(data)
        dispatch(token(info));
       
    }
}

export function GetHistory() {
    const api = useApi();
    const dispatch = useDispatch();
    return async (token) => {
        const info = await api.gethistory(token)
        dispatch(gethistory(info));
    }
}

export function Inserttime() {
    const api = useApi();
    const dispatch = useDispatch();
    return async (data, token) => {
        console.log(data)
        const info = await api.inserttime(data,token)
        dispatch(insertTime(info));
    }
}

export function Contractus() {
    const api = useApi();
    const dispatch = useDispatch();
    return async (data, token) => {
        const info = await api.contractus(data,token)
        console.log(info);

    }
}
