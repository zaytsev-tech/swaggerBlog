import React, { FormEvent, useContext, useEffect, useState } from 'react';

import { StorContext } from '../localstorage/storage-provider';
import { setUsername } from '../localstorage/storage-reducer';

if (!localStorage.getItem('cards')) {
  localStorage.setItem('cards', '[]');
}

function LoginForm({ value }: any) {
  const [name, setName] = useState(value);
  const [active, setActive] = useState(true);
  const nameDispatch = useContext(StorContext);

  function saveUsername(name: string) {
    nameDispatch(setUsername(name));
  }

  function onSubmitForm(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (name != '') {
      saveUsername(name);
      setActive(false);
    } else {
      alert('Вы не ввели имя.');
    }
  }

  return (
    <div className={active ? 'login active' : 'login'}>
      <div className="row pt-5 login-container">
        <form
          className="col-sm-10 offset-sm-1 p-5 gx-3 text-center border"
          onSubmit={onSubmitForm}
        >
          <div className="col">
            <label className="p-2">
              Ваше имя:
              <input
                type="text"
                name="login"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="col">
            <input type="submit" className="btn btn-primary mb-2" value="Войти" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;