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

            {isLoading && <p>Loading...</p>}

            {movies.length > 0 && (
                <ul>
                    {movies.map((movie, index) => (
                        <li key={index}>
                            {movie.title} (Score: {movie.score})
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Movies;
