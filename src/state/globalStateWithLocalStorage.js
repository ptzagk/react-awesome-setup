// @flow

import { createStore } from 'react-hookstore';

const initState = {
    age: 20,
    gender: 'male'
};

const getStateFromLocalStorage = () => {
    const state = window.localStorage.getItem('state');

    if (state) {
        return JSON.parse(state);
    } else {
        return initState;
    }
};

const saveStateToLocalStorage = state => {
    window.localStorage.setItem('state', JSON.stringify(state));
};

export const globalStateWithLocalStorage = createStore('globalStateWithLocalStorage', getStateFromLocalStorage(), (state, action) => {
    let newState;

    switch (action.type) {
        case 'increase_age':
            newState = {
                ...state,
                age: state.age + 1
            };

            saveStateToLocalStorage(newState);
            return newState;
        case 'decrease_age':
            newState = {
                ...state,
                age: state.age > 1 ? state.age - 1 : 1
            };

            saveStateToLocalStorage(newState);
            return newState;
        case 'change_gender':
            newState = {
                ...state,
                gender: state.gender === 'male' ? 'female' : 'male'
            };

            saveStateToLocalStorage(newState);
            return newState;
        default:
            return state;
    }
});
