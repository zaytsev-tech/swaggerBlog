import React, {useState} from 'react';
import axios from 'axios';
import './login.less';

const Login = () => {

    const [messageError, setME] = useState('');

    function onSubmitLogin(e) {
        e.preventDefault();
        let formData = document.querySelector('form').elements;
        let obj = {
            "email": formData[0].value,
            "password": formData[1].value
        }
        axios({
                method: "POST",
                responseType: "json",
                url: "https://test.flcd.ru/api/token",
                data: JSON.stringify(obj),
                headers: {
                    "accept" : "*/*",
                    "Authorization" : "Bearer test",
                    "Content-Type" : "application/json",
                }
            })
              .then(res => {console.log('response:' + res); setME('')})
              .catch(err => {setME(err.response.data.message)});
    }

    return (
        <div className="form-login">
        <p>Вход</p>
            <form onSubmit={e => onSubmitLogin(e)}>
                <span>E-mail: <input type="text" placeholder="e-mail"></input></span><br/>
                <span>Пароль: <input type="password"></input></span><br/>
                <input type="submit" value="Войти"></input>
            </form>
        <div className={messageError == '' ? "login-error-hide" : "login-error"}>
            <p>{messageError}</p>
        </div>
        </div>
    )
}

export default Login;