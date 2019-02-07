// @flow

import React from 'react';
import { useStore } from 'react-hookstore';
import { myStore } from './state/myState';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Movies from './components/Movies';

import './App.scss';

const App = () => {
    const [{ age, gender }, dispatch] = useStore(myStore);

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <p>
                        <Link to="/">Home</Link>
                        <Link to="/movies">Movies</Link>
                    </p>

                    <p>
                        Age: {age}
                        <button onClick={() => dispatch({ type: 'decrease_age' })}>Decrease</button>
                        <button onClick={() => dispatch({ type: 'increase_age' })}>Increase</button>
                    </p>

                    <p>
                        Gender: {gender}
                        <button onClick={() => dispatch({ type: 'change_gender' })}>Change</button>
                    </p>
                </header>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/movies" component={Movies} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
