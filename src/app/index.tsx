import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { MemoryRouter } from "react-router-dom";


ReactDOM.render( <MemoryRouter ><App /></MemoryRouter>, document.getElementById('react-page'));
