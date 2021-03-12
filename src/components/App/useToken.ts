import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString:any = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    };

    const [token, setToken] = useState(getToken());


    const saveToken = (userToken:string):void => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
    };

    return {
        setToken : saveToken,
        token
    };
}