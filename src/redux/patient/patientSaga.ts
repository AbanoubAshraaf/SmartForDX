import { put, select } from 'redux-saga/effects';
import { patientData } from '../../api/patient';
import { uiAction } from '../ui';
import { patientActions } from './patientActions';
import { IReduxState } from '../interface';
import { IPatientData } from '../../models/patient';

export const getUserAuthorities = (state: IReduxState) => state.authReducer.authorities;

export function* getPatientDataSaga() {
    let userAuthorities: string[] = yield select(getUserAuthorities);

    if (userAuthorities.includes('ADMIN')) {
        const PatientRespone: IPatientData | false = yield patientData();
        if (PatientRespone) {
            yield put(patientActions.getPatientSuccess({ ...PatientRespone }));
        }
    }

    yield put(uiAction.setLoader(false));
}
