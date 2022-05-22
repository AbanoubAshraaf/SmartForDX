import React from 'react';
import { Text, View } from 'react-native';
import { IInformationTemplate } from './InformationTemplate.interface';
import { styles } from './InformationTemplate.styles';

export const InformationTemplate = ({ title, informations }: IInformationTemplate) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ alignSelf: 'flex-start' }}>
                {Object.entries(informations).map(([key, value], index) => {
                    return (
                        <Text key={index} style={styles.info}>
                            {key} : {value}
                        </Text>
                    );
                })}
            </View>
        </View>
    );
};
