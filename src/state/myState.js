// @flow

import { createStore } from 'react-hookstore';

export const myState = {
    age: 20,
    gender: 'male'
};

export const myStore = createStore('myStore', myState, (state, action) => {
    switch (action.type) {
        case 'increase_age':
            return {
                ...state,
                age: state.age + 1
            };
        case 'decrease_age':
            return {
                ...state,
                age: state.age > 1 ? state.age - 1 : 1
            };
        case 'change_gender':
            return {
                ...state,
                gender: state.gender === 'male' ? 'female' : 'male'
            };
        default:
            return state;
    }
});
