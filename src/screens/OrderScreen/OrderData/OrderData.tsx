import React from 'react';
import { useSelector } from 'react-redux';
import { IReduxState } from '../../../redux/interface';
import { InformationTemplate } from '../InformationTemplate';
import { SampleList } from '../SampleList/SampleList';

export const OrderData = () => {
    const {
        identifier,
        samples = [],
        lastSubmittedSample,
    } = useSelector((state: IReduxState) => state.orderReducer);

    const informations = {
        'Order Identifier': identifier,
        'Number of Samples': samples.length,
        'Submitted Sample': lastSubmittedSample,
    };

    return (
        <>
            <InformationTemplate title="ORDER INFORMATION" informations={informations} />
            <SampleList samples={samples} />
        </>
    );
};
