import {SwitchProps} from './utils/types';
import {Switch} from './utils/componentStruct';
figma.showUI(__html__, {height: 600, width: 500});

figma.ui.onmessage = (msg) => {
    if (msg.type === 'create-component') {
        if (figma.currentPage.selection[0].type == 'INSTANCE') {
            const state = (figma.currentPage.selection[0] as any).componentProperties[SwitchProps.State];
            const toggled = (figma.currentPage.selection[0] as any).componentProperties[SwitchProps.Toggled];
            console.log(Switch(state.value, toggled.value));
        }
    }
};
