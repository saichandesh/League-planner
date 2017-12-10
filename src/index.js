// dependencies
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// routes
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './app/history';

// store
import store from './app/store';

//components
import { Home } from './Pages/Home';
import {Main} from './Pages/Main/components/Main';

//pages
import {Dashboard} from './Pages/Dashboard/components/Dashboard';

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact strict path="/" component={Home} />
                    <Route component={Main} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
export const htmlContainer = document.querySelector('#app');

if (process.env.NODE_ENV !== 'development') {
    render(<App/>, htmlContainer);
}
