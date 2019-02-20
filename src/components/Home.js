import React from 'react';
import { Typography } from '@material-ui/core';
import GlobalStateDemo from './GlobalStateDemo';

const Home = () => {
    return (
        <>
            <Typography variant="h3" color="inherit">
                Home
            </Typography>

            <Typography paragraph>
                This setup is a baseline to develop new projects from. It will show different types
                of states.
            </Typography>

            <GlobalStateDemo />
        </>
    );
};

export default Home;
