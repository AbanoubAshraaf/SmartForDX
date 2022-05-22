import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { baseUrl } from '../constants';
import { patientData } from '.';
import { IPatientData } from '../../models/patient';
import { gender } from '../../models/patient';

describe('fetch patient API', () => {
    const url = `${baseUrl}/patient`;

    const expectedPatientData: IPatientData = {
        id: 'ff51c2c2-1844-4da5-b04c-6bbd249a2e11',
        tenant: 's4dx_demo',
        content: {
            firstName: 'test',
            lastName: 's4dx',
            address: {
                street: 'Allee 1',
                city: 'München',
                state: 'Bayern',
                zipCode: '12345',
                country: 'Deutschland',
            },
            gender: gender.male,
            externalId: '1234567890',
            middleName: 'Josephine',
            dateOfBirth: '1996-05-20',
        },
        createdAt: '2022-05-20T08:50:38.218+0000',
    };

    const server = setupServer();

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    global.toast = { show: jest.fn() };

    it('get patient data success', async () => {
        server.use(
            rest.get(url, (_req: any, response: (arg0: any) => any, context) => {
                return response(context.json(expectedPatientData));
            }),
        );

        let actualPatientData = await patientData();
        expect(actualPatientData).toStrictEqual(expectedPatientData);
    });
});
