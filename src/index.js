import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import { Routing } from 'modules';

ReactDOM.render(
    <Routing />,
    document.getElementById('root')
);

registerServiceWorker();