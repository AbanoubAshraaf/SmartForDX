import React from 'react';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import Welcome from '../../Welcome';

export type RootStackParamList = {
    readonly Welcome: undefined;
};
export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
    );
};
