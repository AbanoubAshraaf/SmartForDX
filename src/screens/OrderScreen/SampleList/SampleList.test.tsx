import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { SampleList } from './SampleList';
import { ISample } from '../../../models/order';

describe('<SampleList />', () => {
    let samples: ISample[] = [
        {
            id: 'd0906610-6fb1-446b-94da-7c1953f24bef',
            identifier: '632018010925',
            status: 'CREATED',
            sampleType: 'Citrate',
            createdAt: '2022-05-09T08:50:38.394+0000',
            sortOrder: 10,
            seq: 1,
            sampleInfos: [],
            expectedTubeCodes: '005',
        },
    ];

    it('should render the component without craching', () => {
        const rendered = renderer.create(<SampleList samples={samples} />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('renders message when sample list is empty', () => {
        const { getByText } = render(<SampleList samples={[]} />);

        expect(getByText('No samples found.')).toBeTruthy();
    });

    it.each(samples)('renders samples list including "%s"', ({ identifier }) => {
        const { getByText } = render(<SampleList samples={samples} />);

        expect(getByText(identifier)).toBeTruthy();
    });
});
