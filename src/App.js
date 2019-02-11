// @flow

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './sass/App.scss';

const Home = lazy(() => import('./components/Home'));
const Movies = lazy(() => import('./components/Movies'));
const Preferences = lazy(() => import('./components/Preferences'));

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>React Awesome Setup</h1>

                    <p className="navigation">
                        <Link to="/">Home</Link>
                        <Link to="/movies">Movies</Link>
                        <Link to="/preferences">Preferences</Link>
                    </p>
                </header>

                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/movies">
                            <Movies />
                        </Route>
                        <Route path="/preferences">
                            <Preferences />
                        </Route>
                    </Switch>
                </Suspense>
            </div>
        </Router>
    );
};

export default App;
