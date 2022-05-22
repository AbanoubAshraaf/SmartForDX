import { StyleSheet } from 'react-native';
import { colors } from '../../../appStyles';

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.mainThemeForegroundColor,
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 10,
    },
    title: {
        color: colors.mainThemeForegroundColor,
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    info: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});
