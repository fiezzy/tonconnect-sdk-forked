import { WalletInfo } from '@tonconnect/sdk';
import { render } from 'solid-js/web';

import {
    ActionModalName,
    lastSelectedWalletInfo,
    setActionModalOpen,
    setWalletsModalOpen
} from 'src/app/state/modals-state';
import { TonConnectUi } from 'src/ton-connect-ui';
import App from './App';

export const widgetController = {
    openWalletsModal: (): void => void setWalletsModalOpen(true),
    closeWalletsModal: (): void => void setWalletsModalOpen(false),
    openActionsModal: (modal: ActionModalName): void => void setActionModalOpen(modal),
    closeActionsModal: (): void => void setActionModalOpen(null),
    getSelectedWalletInfo: (): WalletInfo | null => lastSelectedWalletInfo(),
    renderApp: (root: string, tonConnectUI: TonConnectUi): (() => void) =>
        render(
            () => <App tonConnectUI={tonConnectUI} />,
            document.getElementById(root) as HTMLElement
        )
};