import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin, setPosts } from '../../reducers/reposReducer';

export const getUser = () => {
    const [token, setToken] = useState(Cookies.get('token'));
    const dispatcher = useDispatch();
    //let user = Cookies.get('token');
    useEffect(() => {
        if(!token) {
            getToken();
        }
    }, []);

    async function getToken() {
            let response = await axios({
                method: "GET",
                responseType: "json",
                url: "https://test.flcd.ru/api/user/self",
                headers: {
                    "accept" : "*/*",
                    "Authorization" : "Bearer " + token,
                }
            });
            let data = await response.data;
            setToken(data);
    }
    return dispatcher(setLogin(token));
}

export const logOut = () => {
    Cookies.remove('token');
    const dispatcher = useDispatch();
    return dispatcher(setLogin(''));
}

export const getPosts = () => {
    return async (dispatcher) => {
        const response = await axios.get("https://test.flcd.ru/api/post");
        dispatcher(setPosts(response.data));
    }
}

export const postNewPost = (text) => {
    let requestObj = new Object();
    requestObj.text = text;
    axios({
        method: "POST",
        responseType: "json",
        url: "https://test.flcd.ru/api/token",
        data: JSON.stringify(requestObj),
        headers: {
            "accept" : "*/*",
            "Content-Type" : "application/json",
        }
    })
}

export const deletePost = async (id) => {
    let user = Cookies.get('token');
    await axios({
        method: "DELETE",
        responseType: "json",
        url: "https://test.flcd.ru/api/post/" + id.toString(),
        headers: {
            "accept" : "*/*",
            "Authorization" : "Bearer " + user,
            "Content-Type" : "application/json"
        }
    });
}