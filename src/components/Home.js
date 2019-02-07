import React from 'react';
import { useStore } from 'react-hookstore';
import { globalStateWithLocalStorage } from '../state/globalStateWithLocalStorage';

const Home = () => {
    const [{ age, gender }, dispatch] = useStore(globalStateWithLocalStorage);

    return (
        <>
            <h2>Home</h2>

            <h3>Global state</h3>

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
