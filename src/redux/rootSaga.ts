import { all, takeLatest } from 'redux-saga/effects';
import { userLoginSaga, authActionTypes } from './authentication';
import { getOrderDataSaga, orderActionTypes } from './order';
import { getPatientDataSaga, patientActionTypes } from './patient';
function* rootSaga() {
    yield all([takeLatest(authActionTypes.USER_LOGIN, userLoginSaga)]);
    yield all([takeLatest(orderActionTypes.GET_ORDER_REQUEST, getOrderDataSaga)]);
    yield all([takeLatest(patientActionTypes.GET_PATIENT_REQUEST, getPatientDataSaga)]);
}

export default rootSaga;
