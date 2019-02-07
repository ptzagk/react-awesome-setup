// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

let rootElement: ?HTMLElement = document.getElementById('root');

if (rootElement instanceof HTMLElement) {
    ReactDOM.render(<App />, rootElement);
}

serviceWorker.register();
