import { put } from 'redux-saga/effects';
import { IOrderData } from '../../models/order';
import { orderData } from '../../api/order';
import { patientActions } from '../patient';
import { uiAction } from '../ui/uiActions';
import { orderActions } from './orderActions';

export function navigateToOrderScreen() {}

export function* getOrderDataSaga() {
    yield put(uiAction.setLoader(true));
    const orderRespone: IOrderData | false = yield orderData();
    if (orderRespone) {
        yield put(orderActions.getOrderSuccess({ ...orderRespone }));
        yield put(patientActions.getPatientData());
    }
}
