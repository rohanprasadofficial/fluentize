import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import {FluentProvider, webLightTheme} from '@fluentui/react-components';

ReactDOM.render(
    <FluentProvider theme={webLightTheme}>
        <App />
    </FluentProvider>,
    document.getElementById('react-page')
);
