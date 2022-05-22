export interface IUiReducerState {
    loading: boolean;
}

export enum uiActionTypes {
    SET_LOADER = 'SET_LOADER',
}

export interface IAction {
    type: uiActionTypes;
    loading: boolean;
}
