import React, { useState } from 'react';
import axios from 'axios';
import './createpost.less'
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/repos';

const CreatePostModal = ({active, setActive}) => {
    const [text, setText] = useState('');
    const dispatcher = useDispatch();

    function updateContent() {
        dispatcher(getPosts());
    }

    function sendPost(e) {
        e.preventDefault();
        let formData = document.querySelector('form').elements;
        let requestObj = {text: formData[0].value};
        let user = Cookies.get('token');;
        console.log(user)
        axios({
            method: "POST",
            responseType: "json",
            url: "https://test.flcd.ru/api/post",
            data: JSON.stringify(requestObj),
            headers: {
                "accept" : "*/*",
                "Authorization" : "Bearer " + user,
                "Content-Type" : "application/json",
            }
        }).then(res => {alert('Пост создан!'); setActive(false); updateContent()});
    }
    return (
        <div className={active ? "bg-modal active" : "bg-modal"} onClick={() => setActive(false)}>
            <div className="container-create-post" onClick={e => e.stopPropagation()}>
                <form onSubmit={e => sendPost(e)}>
                    <p>Введите текст поста:</p>
                    <input type="text" placeholder="Ваш текст"></input>
                    <input type="submit" value="Создать пост"></input>
                </form>
            </div>
        </div>
    );
}

export default CreatePostModal;