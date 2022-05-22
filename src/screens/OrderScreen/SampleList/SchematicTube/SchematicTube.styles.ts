import { StyleSheet } from 'react-native';
import { colors } from '../../../../appStyles';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
        height: 70,
    },
    head: {
        width: 70,
        height: 70,
        backgroundColor: '#00af84',
        borderColor: colors.mainThemeBackgroundColor,
        borderRadius: 10,
        borderWidth: 1,
    },
    body: {
        flexDirection: 'row',
        flex: 1,
        borderColor: colors.mainThemeBackgroundColor,
        borderWidth: 1,
        marginVertical: 10,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    itemText: {
        color: colors.mainThemeBackgroundColor,
    },
});
