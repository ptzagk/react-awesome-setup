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

            <h3>Global state</h3>

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

            <p>
                Movies saved: {moviesSaved}
                <button onClick={() => dispatch({ type: 'decrease_movies_saved' })}>Decrease</button>
                <button onClick={() => dispatch({ type: 'increase_movies_saved' })}>Increase</button>
            </p>

            <p>
                Is loving scifi: {loveSciFi ? 'Hell yeah' : 'Not really'}
                <button onClick={() => dispatch({ type: 'change_scifi_preference' })}>Change</button>
            </p>
        </>
    );
};

export default Preferences;
