import { IOrderData } from '../../models/order';
import { baseUrl } from '../constants';

async function orderData(): Promise<IOrderData | false> {
    const url = `${baseUrl}/order`;

    const result = await fetch(url);

    const { status } = result;

    if (status !== 200 && status !== 201) {
        toast.show(`Failed to get order data (${status})`);
        return false;
    }

    const response: IOrderData = await result.json();

    return response;
}

export { orderData };
