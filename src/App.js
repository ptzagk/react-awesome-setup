// @flow

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './sass/App.scss';
import { AppBar, Toolbar, Typography, Paper, IconButton, Button } from '@material-ui/core';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import theme from './styles/Theme';
import styles from './styles/App';

const Home = lazy(() => import('./components/Home'));
const Movies = lazy(() => import('./components/Movies'));
const Preferences = lazy(() => import('./components/Preferences'));

const App = props => {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <CssBaseline>
                    <AppBar color="primary" position="static" className={props.classes.root}>
                        <Toolbar>
                            <IconButton
                                className={props.classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                            >
                                <MenuIcon />
                            </IconButton>

                            <Typography variant="h6" color="inherit" className={props.classes.grow}>
                                React Aweome Setup
                            </Typography>

                            <Button color="inherit">
                                <Link className={props.classes.routerLink} to="/">
                                    Home
                                </Link>
                            </Button>
                            <Button color="inherit">
                                <Link className={props.classes.routerLink} to="/movies">
                                    Movies
                                </Link>
                            </Button>
                            <Button color="inherit">
                                {' '}
                                <Link className={props.classes.routerLink} to="/preferences">
                                    Preferences
                                </Link>
                            </Button>
                        </Toolbar>
                    </AppBar>

                    <Paper className={props.classes.pagePaper}>
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
                    </Paper>
                </CssBaseline>
            </Router>
        </MuiThemeProvider>
    );
};

export default withStyles(styles)(App);
