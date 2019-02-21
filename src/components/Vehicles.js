import React, { useReducer, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Button } from '@material-ui/core';
import GlobalStateDemo from './GlobalStateDemo';
import FirebaseInit from '../Firebase';

var firebase = new FirebaseInit();

const initState = {
    docId: '',
    cars: 0,
    boats: 0,
    isLoading: true
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'set-doc-id':
            return {
                ...state,
                docId: action.docId
            };
        case 'get-vehicles':
            return {
                ...state,
                cars: action.vehicles.cars,
                boats: action.vehicles.boats,
                isLoading: false
            };
        case 'increase-cars':
            firebase.updateDb('vehicles', state.docId, 'cars', state.cars + 1);

            return {
                ...state,
                cars: state.cars + 1
            };
        case 'decrease-cars':
            firebase.updateDb('vehicles', state.docId, 'cars', state.cars - 1);

            return {
                ...state,
                cars: state.cars - 1
            };
        case 'increase-boats':
            firebase.updateDb('vehicles', state.docId, 'boats', state.boats + 1);

            return {
                ...state,
                boats: state.boats + 1
            };
        case 'decrease-boats':
            firebase.updateDb('vehicles', state.docId, 'boats', state.boats - 1);

            return {
                ...state,
                boats: state.boats - 1
            };
        default:
            throw new Error();
    }
};

const Vehicles = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    const getVehicles = async () => {
        let vehicles = await firebase.getDocument('vehicles');

        return vehicles;
    };

    useEffect(() => {
        getVehicles().then(response => {
            dispatch({ type: 'set-doc-id', docId: response.id });
            dispatch({ type: 'get-vehicles', vehicles: response.data });
        });
    }, []);

    return (
        <>
            <Typography variant="h3" color="inherit">
                Vehicles
            </Typography>

            <Typography paragraph>
                This setup is a baseline to develop new projects from. It will show different types
                of states.
            </Typography>

            <GlobalStateDemo />

            <Typography variant="h4" color="inherit">
                Firebase State
            </Typography>

            <Typography paragraph>
                This data comes from Firebase cloud storage. You can change the state and it is
                automatically saved to database.
            </Typography>

            {state.isLoading && <Typography paragraph>Loading...</Typography>}

            {!state.isLoading && (
                <List>
                    <ListItem>
                        <ListItemText>
                            Cars: <strong>{state.cars}</strong>
                            <Button
                                variant="contained"
                                onClick={() => dispatch({ type: 'increase-cars' })}
                            >
                                Increase
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => dispatch({ type: 'decrease-cars' })}
                            >
                                Decrease
                            </Button>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            Boats: <strong>{state.boats}</strong>
                            <Button
                                variant="contained"
                                onClick={() => dispatch({ type: 'increase-boats' })}
                            >
                                Increase
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => dispatch({ type: 'decrease-boats' })}
                            >
                                Decrease
                            </Button>
                        </ListItemText>
                    </ListItem>
                </List>
            )}
        </>
    );
};

export default Vehicles;
