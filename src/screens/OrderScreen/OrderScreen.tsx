import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { IReduxState } from '../../redux/interface';
import { OrderData } from './OrderData';
import { styles } from './OrderScreen.styles';
import { PatientData } from './PatientData';

export const OrderScreen = () => {
    const { authorities } = useSelector((state: IReduxState) => state.authReducer);

    const isAdmin = authorities.includes('ADMIN');

    return (
        <View style={styles.container}>
            {isAdmin && (
                <View testID="patient-view">
                    <PatientData />
                </View>
            )}
            <OrderData />
        </View>
    );
};
