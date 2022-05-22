import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import rootSaga from './rootSaga';
import { rootReducer } from './rootReducer';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    const persistor = persistStore(store);

    return { store, persistor };
};

export const { store, persistor } = configureStore();
