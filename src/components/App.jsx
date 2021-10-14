import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';

const App = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/registration' component={Registration} />
            </Switch>
        </BrowserRouter>
    </div>
  )

export default App;