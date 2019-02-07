// @flow

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Movies from './components/Movies';
import Preferences from './components/Preferences';

import './App.scss';

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

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/movies" component={Movies} />
                    <Route path="/preferences" component={Preferences} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
