import { IPatientData } from '../../models/patient';

export enum patientActionTypes {
    GET_PATIENT_REQUEST = 'GET_PATIENT_REQUEST',
    SET_PATIENT_SUCCESS = 'SET_PATIENT_SUCCESS',
}

export interface IPatientReducerState extends IPatientData {}

export interface IAction {
    type: patientActionTypes;
    patientData?: IPatientData;
}
