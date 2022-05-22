import { IPatientData } from '../../models/patient';
import { patientActionTypes } from './patient.interface';

export class patientActions {
    static getPatientData = () => {
        return {
            type: patientActionTypes.GET_PATIENT_REQUEST,
        };
    };

    static getPatientSuccess = (patientData: IPatientData) => {
        return {
            type: patientActionTypes.SET_PATIENT_SUCCESS,
            patientData,
        };
    };
}
