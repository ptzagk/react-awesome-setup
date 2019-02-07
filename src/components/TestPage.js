// @flow

import React, { useState, useEffect } from 'react';
import { useStore } from 'react-hookstore';
import { myStore } from '../state/myState';

const TestPage = () => {
    const [{ age }, dispatch] = useStore(myStore);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://www.mocky.io/v2/5c5b357b3900001300e05669')
            .then(res => res.json())
            .then(res => {
                setMovies(res.movies);
            })
            .catch(err => {
                throw new Error('Could not contact API');
            });
    });

    return (
        <>
            <p>My test page!</p>
            <p>
                Age: {age}
                <button onClick={() => dispatch({ type: 'decrease_age' })}>Decrease</button>
                <button onClick={() => dispatch({ type: 'increase_age' })}>Increase</button>
            </p>
            <ul>
                {movies &&
                    movies.map((movie, index) => (
                        <li key={index}>
                            {movie.title} (Score: {movie.score})
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default TestPage;
