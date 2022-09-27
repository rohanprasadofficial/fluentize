import * as React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

declare function require(path: string): any;

import {
    makeStyles,
    shorthands,
    tokens,
    Tab,
    TabList,
    SelectTabData,
    SelectTabEvent,
    TabValue,
    Label,
    Textarea,
    Button,
} from '@fluentui/react-components';
import {Javascript24Filled, PhoneStatusBar24Filled, FoodApple24Filled} from '@fluentui/react-icons';
const useStyles = makeStyles({
    root: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        rowGap: '20px',
    },
    panels: {
        ...shorthands.padding(0, '10px'),
        '& th': {
            textAlign: 'left',
            ...shorthands.padding(0, '30px', 0, 0),
        },
    },
    propsTable: {
        '& td:first-child': {
            fontWeight: tokens.fontWeightSemibold,
        },
        '& td': {...shorthands.padding(0, '30px', 0, 0)},
    },
});
export const App = () => {
    React.useEffect(() => {
        parent.postMessage({pluginMessage: {type: 'create-component'}}, '*');
        onmessage = (event) => {
            console.log('got this from the plugin code', event.data.pluginMessage);
            setRnCode(event.data.pluginMessage);
        };
    });

    React.useEffect(() => {
        // This is how we read messages sent from the plugin controller
        console.log(window.location.pathname);
    }, []);
    const styles = useStyles();
    const [selectedValue, setSelectedValue] = React.useState<TabValue>('reactnative');
    const [rnCode, setRnCode] = React.useState<string>('');
    const [copiedValue, setCopiedValue] = React.useState<string>('');
    const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
        setSelectedValue(data.value);
        console.log(event);
    };

    const ReactNative = React.memo(() => (
        <div role="tabpanel" aria-labelledby="React Native">
            <div className="___bsqnlk0 f22iagw f1vx9l62 f1sqyh7u">
                <Label htmlFor="textarea823"></Label>
                <Textarea
                    id={'qwertyu'}
                    value={rnCode}
                    appearance="outline"
                    placeholder="type here..."
                    resize="both"
                    style={{width: 500}}
                />
            </div>
        </div>
    ));
    const IOS = React.memo(() => (
        <div role="tabpanel" aria-labelledby="Android">
            <div className="___bsqnlk0 f22iagw f1vx9l62 f1sqyh7u">
                <Label htmlFor="textarea823">Fluent iOS Code</Label>
                <Textarea id={'qwertyu2'} appearance="outline" placeholder="type here..." resize="both" />
            </div>
        </div>
    ));
    const Android = React.memo(() => (
        <div role="tabpanel" aria-labelledby="iOS">
            <div className="___bsqnlk0 f22iagw f1vx9l62 f1sqyh7u">
                <Label htmlFor="textarea823">Fluent Android Code</Label>
                <Textarea id={'qwertyu3'} appearance="outline" placeholder="type here..." resize="both" />
            </div>
        </div>
    ));
    return (
        <div className={styles.root}>
            <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
                <Tab id="ReactNative" icon={<Javascript24Filled />} value="reactnative">
                    React Native
                </Tab>
                <Tab id="Android" disabled icon={<PhoneStatusBar24Filled />} value="android">
                    Android
                </Tab>
                <Tab id="IOS" disabled icon={<FoodApple24Filled />} value="ios">
                    iOS
                </Tab>
            </TabList>
            <div className={styles.panels}>
                {selectedValue === 'reactnative' && <ReactNative />}
                {selectedValue === 'android' && <Android />}
                {selectedValue === 'ios' && <IOS />}
                <CopyToClipboard text={rnCode} onCopy={() => setCopiedValue(rnCode)}>
                    {copiedValue.length > 0 ? (
                        <Button appearance="subtle" style={{marginTop: 10}}>
                            Copied
                        </Button>
                    ) : (
                        <Button appearance="outline" style={{marginTop: 10}}>
                            Copy to Clipboard
                        </Button>
                    )}
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default App;
