import React from 'react';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { IReduxState } from '../redux/interface';
import { LoginScreen } from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { OrderScreen } from '../screens/OrderScreen';
import { colors, icons } from '../appStyles';
import { Image, TouchableOpacity } from 'react-native';

export type RootStackParamList = {
    readonly Login: undefined;
    readonly Home: undefined;
    readonly Order: undefined;
};
export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const sharedOptions = {
    headerStyle: {
        backgroundColor: colors.mainThemeForegroundColor,
    },
    headerTintColor: colors.mainThemeBackgroundColor,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

export const MainStackNavigator = () => {
    const { userLoggedIn } = useSelector((state: IReduxState) => state.authReducer);
    const dispatch = useDispatch();

    const LogoutIcon = () => {
        return (
            <TouchableOpacity onPress={() => dispatch({ type: 'USER_LOGOUT' })}>
                <Image
                    style={{ width: 20, height: 20, tintColor: colors.mainThemeBackgroundColor }}
                    source={icons.logout}
                />
            </TouchableOpacity>
        );
    };

    return (
        <Stack.Navigator screenOptions={{ ...sharedOptions }}>
            {!userLoggedIn ? (
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Welcome' }} />
            ) : (
                <>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            headerRight: () => <LogoutIcon />,
                        }}
                    />
                </>
            )}
        </Stack.Navigator>
    );
};
