import {createBrowserHistory} from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch, Redirect} from 'react-router-dom';

import Admin from './components/Admin';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/admin" component={Admin}/>
            <Redirect from="/" to="/admin"/>
        </Switch>
    </Router>,
    document.getElementById('root')
);
