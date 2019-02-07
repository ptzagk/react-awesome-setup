// @flow

import React, { useState, useEffect } from 'react';
import { useStore } from 'react-hookstore';
import { globalStateWithLocalStorage } from '../state/globalStateWithLocalStorage';

const Movies = () => {
    const [{ age, gender }, dispatch] = useStore(globalStateWithLocalStorage);
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = () => {
        fetch('http://www.mocky.io/v2/5c5b357b3900001300e05669?mocky-delay=1000ms')
            .then(res => res.json())
            .then(res => {
                setMovies(res.movies);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <h2>Movies</h2>

            <h3>Global state</h3>

            <p>These values are accessible on all components with Hooks and global state. It will remember the setting with LocalStorage.</p>

            <p>
                Age: {age}
                <button onClick={() => dispatch({ type: 'decrease_age' })}>Decrease</button>
                <button onClick={() => dispatch({ type: 'increase_age' })}>Increase</button>
            </p>

            <p>
                Gender: {gender}
                <button onClick={() => dispatch({ type: 'change_gender' })}>Change</button>
            </p>

            <h3>Local state, data from API</h3>

            <p>
                This data is fetched from an API and it uses hooks with fetch to get the data. It will show "Loading..." while loading. This will be run
                everytime we access this component.
            </p>

            {isLoading && <p>Loading...</p>}

            {movies.length > 0 && (
                <ul>
                    {movies.map((movie, index) => (
                        <li key={index}>
                            <strong>{movie.title}</strong> (Score: {movie.score}/5)
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Movies;
