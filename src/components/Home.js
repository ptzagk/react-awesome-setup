import React from 'react';
import { useStore } from 'react-hookstore';
import { globalStateWithLocalStorage } from '../state/globalStateWithLocalStorage';

const Home = () => {
    const [{ age, gender }, dispatch] = useStore(globalStateWithLocalStorage);

    return (
        <>
            <h2>Home</h2>

            <p>The startpage. Yeah.</p>

            <h3>Global state</h3>

            <p>These values are accessible on all components with Hooks and global state. It will remember the setting with LocalStorage.</p>

            <p>Checkout the other pages with different types of state.</p>

            <p>
                Age: {age}
                <button onClick={() => dispatch({ type: 'decrease_age' })}>Decrease</button>
                <button onClick={() => dispatch({ type: 'increase_age' })}>Increase</button>
            </p>

            <p>
                Gender: {gender}
                <button onClick={() => dispatch({ type: 'change_gender' })}>Change</button>
            </p>
        </>
    );
};

export default Home;
