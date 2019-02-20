// @flow

import React from 'react';
import { useStore } from 'react-hookstore';
import { Typography, Button } from '@material-ui/core';
import { globalState } from '../state/globalState';
import GlobalStateDemo from './GlobalStateDemo';

const Preferences = () => {
    const [{ moviesSaved, loveSciFi }, dispatch] = useStore(globalState);

    return (
        <>
            <Typography variant="h3" color="inherit">
                Preferences
            </Typography>

            <Typography paragraph>
                Will let you save the number of movies you own and if you like sci fi or not (of
                course you do!)
            </Typography>

            <GlobalStateDemo />

            <Typography variant="h4" color="inherit">
                Global state (not localStated)
            </Typography>

            <Typography paragraph>
                These values are global and accessible from other components (even if it's not at
                the moment). It is not remembered on page reload.
            </Typography>

            <Typography paragraph>
                Movies saved: <strong>{moviesSaved}</strong>
                <Button
                    variant="contained"
                    onClick={() => dispatch({ type: 'decrease_movies_saved' })}
                >
                    Decrease
                </Button>
                <Button
                    variant="contained"
                    onClick={() => dispatch({ type: 'increase_movies_saved' })}
                >
                    Increase
                </Button>
            </Typography>

            <Typography paragraph>
                Is loving scifi: <strong>{loveSciFi ? 'Hell yeah' : 'Not really'}</strong>
                <Button
                    variant="contained"
                    onClick={() => dispatch({ type: 'change_scifi_preference' })}
                >
                    Change
                </Button>
            </Typography>
        </>
    );
};

export default Preferences;
