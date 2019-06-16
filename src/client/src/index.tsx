import historyService from './history';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from 'react-apollo';
import {Redirect, Route, Switch} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';
import {store} from './plumbing';

import Admin from './components/Admin';

const cache = new InMemoryCache();

const link = new HttpLink({
    uri: 'http://localhost:3333/graphql'
});

const client = new ApolloClient({
    cache,
    link
});

ReactDOM.render(
    <AppContainer>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <ConnectedRouter history={historyService.history} key={Math.random()}>
                    <div className="app-root">
                        <Switch>
                            <Route path="/admin" component={Admin}/>
                            <Redirect from="/" to="/admin/table"/>
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
        </ApolloProvider>
    </AppContainer>,
    document.getElementById('root')
);
