import { IAction, IOrderReducerState, orderActionTypes } from './order.interface';

export class orderReducer {
    static INITIAL_STATE: IOrderReducerState = {
        id: '',
        identifier: '',
        laboratoryTimestamp: '',
        samples: [],
        lastSubmittedSample: null,
        fetched: false,
    };

    static reduce = (state = orderReducer.INITIAL_STATE, action: Record<string, any>) => {
        switch (action.type) {
            case orderActionTypes.GET_ORDER_SUCCESS:
                return { ...state, fetched: true, ...action.orderData };
            case orderActionTypes.SET_SAMPLE_ID:
                return { ...state, lastSubmittedSample: action.sampleIdentifier };
            default:
                return state;
        }
    };
}
