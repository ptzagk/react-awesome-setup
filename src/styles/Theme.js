// @flow

import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: pink,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2
    },
    typography: {
        useNextVariants: true
    },
    overrides: {
        MuiButton: {
            root: {
                margin: '0 1em',
                padding: '3px 10px'
            }
        }
    }
});

export default theme;
