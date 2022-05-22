import { IUiReducerState, uiActionTypes } from './ui.interface';

export class uiReducer {
    static INITIAL_STATE: IUiReducerState = {
        loading: false,
    };

    static reduce = (state = uiReducer.INITIAL_STATE, action: Record<string, any>) => {
        switch (action.type) {
            case uiActionTypes.SET_LOADER:
                return { ...state, loading: action.loading };
            default:
                return state;
        }
    };
}
