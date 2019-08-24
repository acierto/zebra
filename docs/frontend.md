---
id: frontend
title: Frontend
---

For frontend part I decided to create a single section, as it’s quite hard to separate each topic separately. 
As I have a vast experience with React and I really love it, I’m using it at this project. 
I never had worked with TypeScript as at my current project at work I really don’t see any problem of using 
pure Javascript especially with appeared ES6. Replacing a working solution without a significant reason is never
a good idea. And at the same time I heard many positive feedback from developers who actually using TypeScript. 
That’s actually was a reason to try it out on real word scenario and see the benefits and shortcomings of it. 
I’ll restrain myself from giving the feedback on this point of time, as I had quite limited experience with it so far.
What I can say, that mostly it looks quite familiar to ES6 and in some cases it requires to scratch a head and google
when seeing exotic errors.

Let’s have a look at the entry point of the frontend side:

```jsx
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
```

As we are using GraphQL, we have to somehow read that format on the frontend and map it to React elements. 
To solve that issue Apollo Client is used. What you need to do for that is to know how to connect to exposed GraqhGL 
schema (line 18–20). The connect at this point of time is not secured, that’s why the knowing the link address is enough.
 At next stage I’ll show how to make it secure in different ways.

Another thing what you have to configure is where to save the cache (line 16), now you see the simplest solution — 
to keep the cache in memory.

The render point for React application is defined on lines 27–42, ```document.getElementById('root')``` this 
line attaches that component to defined element (element with id="root") in ```index.html``` file.

At this point of time Redux is used only for routing. As the further evolvement of the project I see the role of using 
Redux by keeping the internal state of components inside, so then you can easily control component from another component,
 or even just by defining the state. That’s way more flexible and stable approach comparing to keeping internal state 
 inside of the component itself. As it is done now in ```Admin.tsx```
 
 ```jsx
class Dashboard extends React.Component<Props, State> {
    static propTypes: { classes: Validator<NonNullable<object>> };

    constructor(props) {
        super(props);
        this.state = {mobileOpen: false};
    }
    ...
```








