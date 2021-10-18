import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {getUser, logOut, getPosts} from './actions/repos';
import CreatePostModal from './CreatePost';
import './header.less';

const Header = () => {
    let token = getUser();
    const [user, setUser] = useState(token);
    const [modalActive, setModalActive] = useState(false);
    const dispatcher = useDispatch();
    useEffect(() => {
        dispatcher(getPosts());
        setUser(token);
    }, [token]);
    function emptyToken() {
        setUser('');
    }
        if(user != '') {
            return (
            <div className='header'>
                <CreatePostModal active={modalActive} setActive={setModalActive} />
                <button onClick={() => setModalActive(true)}>Создать пост</button>
                <button onClick={() => {logOut(); emptyToken()}}>Выйти</button>
            </div>)
        } else {
            return (
                <div className='header'>
                    <Link to="/login"><button>Войти</button></Link>
                    <Link to="/registration"><button>Регистрация</button></Link>
                </div>)
        }
}

export default Header;