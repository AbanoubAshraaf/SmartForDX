import EncryptedStorage from 'react-native-encrypted-storage';
import { authenticationReducer } from './authentication';
import { persistCombineReducers } from 'redux-persist';
import { uiReducer } from './ui/uiReducer';
import { orderReducer } from './order';
import { IReduxState } from './interface';

const persistConfig = {
    key: 'root',
    storage: EncryptedStorage,
    whitelist: ['authReducer', 'orderReducer'],
};

const appReducer = persistCombineReducers(persistConfig, {
    authReducer: authenticationReducer.reduce,
    uiReducer: uiReducer.reduce,
    orderReducer: orderReducer.reduce,
});

export const rootReducer = (state: IReduxState | undefined, action: Record<string, any>) => {
    if (action.type === 'USER_LOGOUT') {
        EncryptedStorage.clear();
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};
