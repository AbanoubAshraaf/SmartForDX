import React, { useState } from 'react';
import { Image, ScrollView, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { icons } from '../../appStyles';
import { CustomButton } from '../../components/CustomButton';
import { authenticationActions } from '../../redux/authentication';
import { IReduxState } from '../../redux/interface';
import { styles } from './LoginScreen.styles';

export const LoginScreen = () => {
    const { loading } = useSelector((state: IReduxState) => state.uiReducer);
    const dispatch = useDispatch();
    const [userName, onChangeName] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <ScrollView
            testID="login-screen"
            style={styles.container}
            contentContainerStyle={{ flex: 1 }}>
            <Image source={icons.s4dx} style={styles.logo} resizeMode="contain" />
            <View style={{ marginTop: 20 }}>
                <TextInput
                    testID="username-input"
                    style={styles.input}
                    onChangeText={onChangeName}
                    value={userName}
                    placeholder="User Name"
                />
                <TextInput
                    testID="password-input"
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Password"
                />
                <CustomButton
                    onPress={() =>
                        dispatch(authenticationActions.userLogin({ userName, password }))
                    }
                    title="Login"
                    loading={loading}
                    style={{ marginTop: 50 }}
                />
            </View>
        </ScrollView>
    );
};
