import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';



//import theme
import { COLORS, SIZES, FONTS } from '../constants';


//import custom components
import CustomTextInput from '../components/TextInput';


const Login = () => {










    return (
        <View style={styles.body}>
            <SafeAreaView style={styles.container}>
                <View style={styles.greetSection}>
                    <Text style={styles.greetHeading}>
                        Hello there!
                    </Text>
                    <Text style={styles.greetText}>
                        Welcome back you've been missed!
                    </Text>
                </View>
                <View style={styles.formSection}>

                    <CustomTextInput onChange={(text) => { console.log(text) }} label="Email" placeholder="Enter Username" />
                    <CustomTextInput label="password" placeholder="Password" />
                </View>
                <View style={styles.instructionSection}>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: COLORS.white2,
    },
    container: {
        flex: 1,
        marginTop: SIZES.statusbar,
    },
    greetSection: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',

    },
    greetHeading: {
        ...FONTS.body1,
        fontWeight: '500',
        textAlign: 'center',
        textTransform: 'capitalize',
        lineHeight: SIZES.lineHeight * 1.5,
    },
    greetText: {
        marginTop: SIZES.padding / 2,
        ...FONTS.body4,
        width: SIZES.width * .5,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: COLORS.darkGray,
        letterSpacing: 1,
    },
    formSection: {
        marginHorizontal: SIZES.padding * 1.5,
        flex: 2,

    },

    instructionSection: {
        flex: 1,

    }

})

export default Login;
