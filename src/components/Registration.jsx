import React, {useState} from 'react';
import axios from 'axios';
import './registration.less';
import './login.less';

const Registration = () => {

    const [messageError, setME] = useState('');

    function onSubmitLogin(e) {
        e.preventDefault();
        let formData = document.querySelector('form').elements;
        if(formData[2].value != formData[3].value) {
            setME('Пароли не совпадают');
            return;
        }
        let obj = {
            "name": formData[0].value,
            "email": formData[1].value,
            "password": formData[2].value,
            "password_confirmation": formData[3].value
        }
        axios({
                method: "POST",
                responseType: "json",
                url: "https://test.flcd.ru/api/register",
                data: JSON.stringify(obj),
                headers: {
                    "accept" : "*/*",
                    "Authorization" : "Bearer " + obj.name,
                    "Content-Type" : "application/json",
                }
            })
              .then(res => {console.log('response:' + res); setME('')})
              .catch(err => {setME(err.response.data.message)});
    }

    return (
        <div className="form-login">
        <p>Регистрация</p>
            <form onSubmit={e => onSubmitLogin(e)}>
                <span>Nickname: <input type="text" placeholder="Name"></input></span><br/>
                <span>E-mail: <input type="text" placeholder="e-mail"></input></span><br/>
                <span>Пароль: <input type="password"></input></span><br/>
                <span>Повторите пароль: <input type="password"></input></span><br/>
                <input type="submit" value="Зарегистрироваться"></input>
            </form>
        <div className={messageError == '' ? "login-error-hide" : "login-error"}>
            <p>{messageError}</p>
        </div>
        </div>
    )
}

export default Registration;