// @flow

import React, { useState, useEffect } from 'react';
import { useStore } from 'react-hookstore';
import { myStore } from '../state/myState';

const Movies = () => {
    const [{ age }, dispatch] = useStore(myStore);
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

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h2>Movies</h2>
            <p>
                Age: {age}
                <button onClick={() => dispatch({ type: 'decrease_age' })}>Decrease</button>
                <button onClick={() => dispatch({ type: 'increase_age' })}>Increase</button>
            </p>

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
