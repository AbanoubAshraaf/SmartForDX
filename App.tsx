import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigator/rootNavigation';
import { MainStackNavigator } from './src/navigator/mainStackNavigator';
import { SafeAreaView, StatusBar } from 'react-native';
import Toast from 'react-native-toast-notifications';
import 'react-native-gesture-handler';
import { colors } from './src/appStyles';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.mainThemeBackgroundColor }}>
            <StatusBar backgroundColor={colors.mainThemeForegroundColor} />
            <NavigationContainer ref={navigationRef}>
                <MainStackNavigator />
                <Toast ref={(ref) => (global.toast = ref)} />
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;
