import React from 'react';
import { FlatList, ListRenderItem, Text } from 'react-native';
import { ISample } from '../../../models/order';
import { SampleListProps } from './SampleList.interface';
import { styles } from './SampleList.styles';
import { SchematicTube } from './SchematicTube/SchematicTube';

export const SampleList = ({ samples }: SampleListProps) => {
    if (samples.length === 0) {
        return <Text>No samples found.</Text>;
    }

    let renderItem: ListRenderItem<ISample> = ({ item: sample }) => {
        return <SchematicTube {...sample} />;
    };

    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={{ paddingVertical: 10 }}
            data={samples}
            renderItem={renderItem}
        />
    );
};
