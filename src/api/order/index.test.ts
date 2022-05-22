import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { baseUrl } from '../constants';
import { IOrderData } from '../../models/order';
import { orderData } from '.';

describe('fetch order API', () => {
    const url = `${baseUrl}/order`;

    const expectedOrderData: IOrderData = {
        id: 'cc1a04a7-6328-4890-a731-86f4f0cddb44',
        identifier: '2018010925',
        laboratoryTimestamp: '2022-05-09T08:50:36.612+0000',
        samples: [
            {
                id: 'd0906610-6fb1-446b-94da-7c1953f24bef',
                identifier: '632018010925',
                status: 'CREATED',
                sampleType: 'Citrate',
                createdAt: '2022-05-09T08:50:38.394+0000',
                sortOrder: 10,
                seq: 1,
                sampleInfos: [
                    {
                        id: 'fc85020d-62ce-4174-b194-a42387bc122c',
                        infoCode: 'SWIVELLED',
                        infoText: 'Gently invert 3-5 times',
                    },
                ],
                expectedTubeCodes: '005',
            },
        ],
    };

    const server = setupServer();

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    global.toast = { show: jest.fn() };

    it('get order data success', async () => {
        server.use(
            rest.get(url, (_req: any, response: (arg0: any) => any, context) => {
                return response(context.json(expectedOrderData));
            }),
        );

        let actualOrderData = await orderData();
        expect(actualOrderData).toStrictEqual(expectedOrderData);
    });
});
