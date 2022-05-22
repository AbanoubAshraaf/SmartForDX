import { uiActionTypes } from './ui.interface';

export class uiAction {
    static setLoader = (loading: boolean) => {
        return {
            type: uiActionTypes.SET_LOADER,
            loading,
        };
    };
}
