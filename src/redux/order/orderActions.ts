import { IOrderData } from '../../models/order';
import { orderActionTypes } from './order.interface';

export class orderActions {
    static setSampleIdentifier = (sampleIdentifier: string) => {
        return {
            type: orderActionTypes.SET_SAMPLE_ID,
            sampleIdentifier,
        };
    };

    static getOrderData = () => {
        return {
            type: orderActionTypes.GET_ORDER_REQUEST,
        };
    };

    static getOrderSuccess = (orderData: IOrderData) => {
        return {
            type: orderActionTypes.GET_ORDER_SUCCESS,
            orderData,
        };
    };
}
