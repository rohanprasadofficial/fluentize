import * as React from 'react';
import '../styles/ui.css';

declare function require(path: string): any;

const App = ({}) => {
    React.useEffect(() => {
        parent.postMessage({pluginMessage: {type: 'create-component'}}, '*');
    });

    const onCreate = () => {
        console.log('Create');
    };

    React.useEffect(() => {
        // This is how we read messages sent from the plugin controller
        console.log(window.location.pathname);
    }, []);

    return <div onClick={onCreate}>Hello From Fluentize</div>;
};

export default App;
