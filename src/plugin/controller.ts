import {AvatarProps, SwitchProps} from './utils/types';
import {Avatar, Switch} from './utils/componentStruct';
figma.showUI(__html__, {height: 250, width: 700});

figma.ui.onmessage = (msg) => {
    if (msg.type === 'create-component') {
        if (figma.currentPage.selection[0].type == 'INSTANCE') {
            console.log('DATA', figma.currentPage.selection[0].name);
            switch (figma.currentPage.selection[0].name) {
                case 'Switch':
                    const state = (figma.currentPage.selection[0] as any).componentProperties[SwitchProps.State];
                    const toggled = (figma.currentPage.selection[0] as any).componentProperties[SwitchProps.Toggled];
                    figma.ui.postMessage(Switch(toggled.value, state.value));
                    break;
                case 'Avatar':
                    console.log('Value: ' + figma.currentPage.selection[0]);
                    const activity = (figma.currentPage.selection[0] as any).componentProperties[AvatarProps.Activity];
                    const presense = (figma.currentPage.selection[0] as any).componentProperties[AvatarProps.Presence];
                    const size = (figma.currentPage.selection[0] as any).componentProperties[AvatarProps.Size];
                    const style = (figma.currentPage.selection[0] as any).componentProperties[AvatarProps.Style];
                    figma.ui.postMessage(Avatar(size?.value, style?.value, presense?.value, activity?.value));
                    break;
            }
        }
    }
};
