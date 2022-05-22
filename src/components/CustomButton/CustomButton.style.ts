import { StyleSheet } from 'react-native';
import { colors } from '../../appStyles';

export const styles = StyleSheet.create({
    buttonContainer: {
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: colors.mainThemeForegroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        height: 50,
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.mainThemeBackgroundColor,
    },
});
