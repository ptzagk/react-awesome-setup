// @flow

import { createStore } from 'react-hookstore';

const initState = {
    moviesSaved: 150,
    loveSciFi: true
};

export const globalState = createStore('globalState', initState, (state, action) => {
    let newState;

    switch (action.type) {
        case 'increase_movies_saved':
            newState = {
                ...state,
                moviesSaved: state.moviesSaved + 1
            };

            return newState;
        case 'decrease_movies_saved':
            newState = {
                ...state,
                moviesSaved: state.moviesSaved > 1 ? state.moviesSaved - 1 : 1
            };

            return newState;
        case 'change_scifi_preference':
            newState = {
                ...state,
                loveSciFi: !state.loveSciFi
            };

            return newState;
        default:
            return state;
    }
});
