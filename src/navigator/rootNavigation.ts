import { StackActions } from '@react-navigation/native';
import { RootStackParamList } from './mainStackNavigator';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: RootStackParamList, params: any) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}
export function replace(name: RootStackParamList) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.replace(name));
    }
}
