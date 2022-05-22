import React from 'react';
import { styles } from './CustomButton.style';
import { ICustomButtonProps } from './CustomButton.interface';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../appStyles';

export const CustomButton = (props: ICustomButtonProps) => {
    return (
        <TouchableOpacity
            testID="custom-button"
            onPress={props.onPress}
            style={[styles.buttonContainer, props.style]}>
            {props.loading ? (
                <ActivityIndicator
                    testID="activity-indicator"
                    color={colors.mainThemeBackgroundColor}
                />
            ) : (
                <Text style={[styles.textStyle, props.textStyle]}>{props.title}</Text>
            )}
        </TouchableOpacity>
    );
};
