import { BASE_URL } from './types';

export function useApi() {
    async function GET(url) {
        const result = await fetch(`${BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await result.json();
        return { data }
    }

    async function GET0(url, token) {
        const result = await fetch(`${BASE_URL}${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": token.token
            }
        });
        const data = await result.json();
        return { data }
    }

    async function POST(url, params) {
        const token = '';
        if (!apiKey) {
            throw new Error('Api is not initailized yet')
        }
        const result = await fetch(`${BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: params === null ? void 0 : typeof params === 'string' ? params : JSON.stringify(params)
        });
        const data = await result.json();
        return { data }
    }
    async function POST0(url, params,token) {  
        const result = await fetch(`${BASE_URL}${url}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "token": token.token.token
            },
            body: JSON.stringify(params)
        });
        const data = await result.json();
        return { data }
    }
    async function POST1(url, params,token) {  
        const result = await fetch(`${BASE_URL}${url}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "token": token.token
            },
            body: JSON.stringify(params)
        });
        const data = await result.json();
        return { data }
    }
    return {
        async signin(params,token) {
            const {data} = await POST0('/userAuth/userLogin', params,token);
            return data
        },
        async signup(params) {
            const {data} = await POST0('/user/register', params);
        },
        async gettoken() {
            const {data} = await GET('/tokenGenrate/jwtToken');
            return data
        },
        async gethistory(token) {
            const {data} = await GET0('/profile/workTimeHistory',token);
            return data
        },
        async inserttime(params,token) {
            const {data} = await POST1('/profile/startAndEndTime', params,token);
            return data
        },
        async contractus(params,token) {
            const {data} = await POST1('/profile/addContact', params,token);
            return data
        }
        
    }
}