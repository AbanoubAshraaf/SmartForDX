import { all, takeLatest } from 'redux-saga/effects';
import { userLoginSaga, authActionTypes } from './authentication';
import { getOrderDataSaga, orderActionTypes } from './order';
function* rootSaga() {
    yield all([takeLatest(authActionTypes.USER_LOGIN, userLoginSaga)]);
    yield all([takeLatest(orderActionTypes.GET_ORDER_REQUEST, getOrderDataSaga)]);
}

export default rootSaga;
