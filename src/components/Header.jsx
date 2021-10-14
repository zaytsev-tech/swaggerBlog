import React from 'react';
import { Link } from 'react-router-dom';
import {getUser} from './actions/repos';
import './header.less';

const Header = () => {
    let user = '';
    getUser().then(res => {user = res});
        if(user != false) {
            return (
            <div className='header'>
                <button>Создать пост</button>
                <button>Выйти</button>
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