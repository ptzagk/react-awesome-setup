// @flow

import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import GlobalStateDemo from './GlobalStateDemo';

const Movies = () => {
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
            <Typography variant="h3" color="inherit">
                Movies
            </Typography>

            <Typography paragraph>Will list movies from API.</Typography>

            <GlobalStateDemo />

            <Typography variant="h4" color="inherit">
                Local state, data from API
            </Typography>

            <Typography paragraph>
                This data is fetched from an API and it uses hooks with fetch to get the data. It
                will show "Loading..." while loading. This will be run everytime we access this
                component.
            </Typography>

            {isLoading && <p>Loading...</p>}

            {movies.length > 0 && (
                <List>
                    {movies.map((movie, index) => (
                        <ListItem key={index}>
                            <ListItemText>
                                {movie.title} (Score: {movie.score}/5)
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            )}
        </>
    );
};

export default Movies;
