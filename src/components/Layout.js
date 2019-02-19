// @flow

import React, { memo } from 'react';
import { AppBar, Toolbar, Typography, Paper, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Layout = memo(props => (
    <Paper elevation={0}>
        <AppBar color="primary" position="static" style={{ backgroundColor: '#0064ab' }}>
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    React Aweome Setup
                </Typography>
            </Toolbar>
        </AppBar>

        {props.children}
    </Paper>
));

export default Layout;
