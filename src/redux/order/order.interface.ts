import { IOrderData } from '../../models/order';

export enum orderActionTypes {
    GET_ORDER_REQUEST = 'GET_ORDER_REQUEST',
    GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS',
    SET_SAMPLE_ID = 'SET_SAMPLE_ID',
}

export interface IOrderReducerState extends IOrderData {
    lastSubmittedSample: null | string;
    fetched: boolean;
}

export interface IAction {
    type: orderActionTypes;
    sampleIdentifier?: string;
    orderData?: IOrderData;
}
