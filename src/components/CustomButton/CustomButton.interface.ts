import { ViewStyle, TextStyle } from 'react-native';

export interface ICustomButtonProps {
    style?: ViewStyle;
    textStyle?: TextStyle;
    onPress: () => void;
    title?: string;
    loading?: boolean;
}
