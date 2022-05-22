import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton } from '../../components/CustomButton';
import { RootStackNavigation } from '../../navigator/mainStackNavigator';
import { IReduxState } from '../../redux/interface';
import { orderActions } from '../../redux/order';
import { styles } from './HomeScreen.styles';

export const HomeScreen = () => {
    const { orderReducer, authReducer, uiReducer } = useSelector((state: IReduxState) => state);
    const { loading } = uiReducer;
    const { name, lastName } = authReducer;
    const { fetched } = orderReducer;

    const dispatch = useDispatch();

    const [sampleIdentifier, onChangeSampleIdentifier] = useState('');

    const onSubmit = () => {
        dispatch(orderActions.setSampleIdentifier(sampleIdentifier));
        if (fetched) {
            // navigation.navigate('Order');
        } else {
            dispatch(orderActions.getOrderData());
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.userName}>{name + ' ' + lastName}</Text>
            <TextInput
                testID="sample-identifier-input"
                style={styles.input}
                onChangeText={onChangeSampleIdentifier}
                value={sampleIdentifier}
                placeholder="Sample Identifier"
            />
            <CustomButton onPress={onSubmit} title="Submit" loading={loading} />
        </ScrollView>
    );
};
