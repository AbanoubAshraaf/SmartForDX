import { IPatientData } from '../../models/patient';
import { baseUrl } from '../constants';

async function patientData(): Promise<IPatientData | false> {
    const url = `${baseUrl}/patient`;

    const result = await fetch(url);

    const { status } = result;

    if (status !== 200 && status !== 201) {
        toast.show(`Failed to get order data (${status})`);
        return false;
    }

    const response: IPatientData = await result.json();

    return response;
}

export { patientData };
