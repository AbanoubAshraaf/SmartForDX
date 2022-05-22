import { StyleSheet } from 'react-native';
import { colors } from '../../appStyles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mainThemeBackgroundColor,
        padding: 20,
    },
    logo: {
        alignSelf: 'center',
        height: 150,
        width: 150,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: colors.mainThemeForegroundColor,
        color: colors.mainThemeForegroundColor,
        borderRadius: 10,
    },
});
