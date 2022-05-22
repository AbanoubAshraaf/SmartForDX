import React from 'react';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { LoginScreen } from '../screens/LoginScreen';

export type RootStackParamList = {
    readonly Login: undefined;
};
export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Welcome' }} />
        </Stack.Navigator>
    );
};
