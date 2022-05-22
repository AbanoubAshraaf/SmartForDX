import React from 'react';
import { useSelector } from 'react-redux';
import { IContent } from '../../../models/patient';
import { IReduxState } from '../../../redux/interface';
import { InformationTemplate } from '../InformationTemplate';

export const PatientData = () => {
    const { content = {} as IContent } = useSelector((state: IReduxState) => state.patientReducer);

    const { dateOfBirth, firstName, middleName, lastName, gender } = content;

    const informations = {
        Name: firstName + ' ' + middleName + ' ' + lastName,
        'Date Of Birth': dateOfBirth,
        Gender: gender,
    };

    return <InformationTemplate title="PATIENT INFORMATION" informations={informations} />;
};
