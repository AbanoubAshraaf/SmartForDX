import { IAction, IPatientReducerState, patientActionTypes } from './patient.interface';

export class patientReducer {
    static INITIAL_STATE: IPatientReducerState = {
        id: '',
        tenant: '',
        content: undefined,
        createdAt: undefined,
    };

    static reduce = (state = patientReducer.INITIAL_STATE, action: IAction) => {
        switch (action.type) {
            case patientActionTypes.SET_PATIENT_SUCCESS:
                return { ...state, ...action.patientData };
            default:
                return state;
        }
    };
}
