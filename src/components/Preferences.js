// @flow

import React from 'react';
import { useStore } from 'react-hookstore';
import { globalState } from '../state/globalState';
import { globalStateWithLocalStorage } from '../state/globalStateWithLocalStorage';

const Preferences = () => {
    const [{ age, gender }, dispatchGlobalState] = useStore(globalStateWithLocalStorage);
    const [{ moviesSaved, loveSciFi }, dispatch] = useStore(globalState);

    return (
        <>
            <h2>Preferences</h2>

            <p>Will let you save the number of movies you own and if you like sci fi or not (of course you do!)</p>

            <h3>Global state</h3>

            <p>These values are accessible on all components with Hooks and global state. It will remember the setting with LocalStorage.</p>

            <p>
                Age: {age}
                <button onClick={() => dispatchGlobalState({ type: 'decrease_age' })}>Decrease</button>
                <button onClick={() => dispatchGlobalState({ type: 'increase_age' })}>Increase</button>
            </p>

            <p>
                Gender: {gender}
                <button onClick={() => dispatchGlobalState({ type: 'change_gender' })}>Change</button>
            </p>

            <h3>Global state (not localStated)</h3>

            <p>These values are global and accessible from other components (even if it's not at the moment). It is not remembered on page reload.</p>

            <p>
                Movies saved: <strong>{moviesSaved}</strong>
                <button onClick={() => dispatch({ type: 'decrease_movies_saved' })}>Decrease</button>
                <button onClick={() => dispatch({ type: 'increase_movies_saved' })}>Increase</button>
            </p>

            <p>
                Is loving scifi: <strong>{loveSciFi ? 'Hell yeah' : 'Not really'}</strong>
                <button onClick={() => dispatch({ type: 'change_scifi_preference' })}>Change</button>
            </p>
        </>
    );
};

export default Preferences;
