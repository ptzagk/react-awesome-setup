import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { useStore } from 'react-hookstore';
import { globalStateWithLocalStorage } from '../state/globalStateWithLocalStorage';

const GlobalState = () => {
    const [{ age, gender }, dispatch] = useStore(globalStateWithLocalStorage);

    return (
        <>
            <Typography variant="h4" color="inherit">
                Global State
            </Typography>

            <Typography paragraph>
                These values are accessible on all components with Hooks and global state. It will
                remember the setting with LocalStorage.
            </Typography>

            <Typography paragraph>
                Checkout the other pages with different types of state.
            </Typography>

            <Typography paragraph>
                Age: <strong>{age}</strong>
                <Button variant="contained" onClick={() => dispatch({ type: 'decrease_age' })}>
                    Decrease
                </Button>
                <Button variant="contained" onClick={() => dispatch({ type: 'increase_age' })}>
                    Increase
                </Button>
            </Typography>

            <Typography paragraph>
                Gender: <strong>{gender}</strong>
                <Button variant="contained" onClick={() => dispatch({ type: 'change_gender' })}>
                    Change
                </Button>
            </Typography>
        </>
    );
};

export default GlobalState;
