import { View, Text, TextInput, StyleSheet } from 'react-native';


//importing themes
import { COLORS, SIZES, FONTS } from '../constants';






const CustomTextInput = (props) => (
    <View style={styles.formHolder}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput style={styles.formField} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
    </View>
)


const styles = StyleSheet.create({
    formHolder: {
        marginBottom: SIZES.padding,
    },
    label: {
        fontSize: SIZES.font * 1.1,
        color: COLORS.darkGray,
        marginBottom: SIZES.base,
        textTransform: 'capitalize',
    },
    formField: {
        height: SIZES.height * .07,
        borderRadius: SIZES.radius,
        fontSize: SIZES.font * 1.2,
        backgroundColor: COLORS.white,
        width: '100%',
        paddingHorizontal: SIZES.padding,
        textTransform: 'capitalize',
        elevation: 2,
    },
    formFieldError: {
        marginBottom: SIZES.padding,
        height: SIZES.height * .07,
        borderRadius: SIZES.radius,
        fontSize: SIZES.font * 1.2,
        backgroundColor: COLORS.white,
        width: '100%',
        paddingHorizontal: SIZES.padding,
        textTransform: 'capitalize',
        elevation: 2,
        borderColor: COLORS.red,
        borderWidth: 1,
    },
})



export default CustomTextInput;