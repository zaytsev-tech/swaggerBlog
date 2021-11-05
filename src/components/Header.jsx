import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getUser, logOut, getPosts} from './actions/repos';
import CreatePostModal from './CreatePost';
import './header.less';

const Header = () => {
    //let token = getUser();
    //const [user, setUser] = useState(token);
    const user = useSelector(state => state.repos.login);
    const [modalActive, setModalActive] = useState(false);
    const dispatcher = useDispatch();
    useEffect(() => {
        dispatcher(getPosts());
    }, []);
    function emptyToken() {
        dispatcher(logOut());
    }
        if(user != '') {
            return (
            <div className='header'>
                <CreatePostModal active={modalActive} setActive={setModalActive} />
                <button onClick={() => setModalActive(true)}>Создать пост</button>
                <button onClick={() => {emptyToken()}}>Выйти</button>
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