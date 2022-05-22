import { persistCombineReducers } from 'redux-persist';
import EncryptedStorage from 'react-native-encrypted-storage';

import { IReduxState } from './interface';
import { uiReducer } from './ui';
import { authenticationReducer } from './authentication';

const persistConfig = {
    key: 'root',
    storage: EncryptedStorage,
    whitelist: [],
};

const appReducer = persistCombineReducers(persistConfig, {
    uiReducer: uiReducer.reduce,
    authReducer: authenticationReducer.reduce,
});

export const rootReducer = (state: IReduxState | undefined, action: Record<string, any>) => {
    if (action.type === 'USER_LOGOUT') {
        EncryptedStorage.clear();
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};
