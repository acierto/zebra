import historyService from './history';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';
import {store} from './plumbing';

import Admin from './components/Admin';

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <ConnectedRouter history={historyService.history} key={Math.random()}>
                <div className="app-root">
                    <Switch>
                        <Route path="/admin" component={Admin}/>
                        <Redirect from="/" to="/admin/dashboard"/>
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);
