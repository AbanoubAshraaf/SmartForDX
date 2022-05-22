import React from 'react';

import { Text, View } from 'react-native';
import { SchematicTubeProps } from './SchematicTube.interface';
import { styles } from './SchematicTube.styles';

export const SchematicTube = ({ id, sampleType, identifier }: SchematicTubeProps) => {
    return (
        <View key={id} style={styles.container}>
            <View style={styles.head} />
            <View style={styles.body}>
                <Text style={styles.itemText}>{sampleType}</Text>
                <Text style={styles.itemText}>{identifier}</Text>
            </View>
        </View>
    );
};
