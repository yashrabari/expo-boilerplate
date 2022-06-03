import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


//importing theme
import { COLORS, FONTS, images, SIZES } from '../constants'


const OnBoarding = ({ navigation }) => {




    return (
        <View style={styles.body}>
            <View style={styles.halfScreenImageSection}>
                <Image source={images.onboard} style={styles.onBoardingImage} />
            </View>
            <View style={styles.textContent}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>
                        Discover Your Favorite Cakes and puddings.
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        get ready to love at first bite with sprinkling stories.
                    </Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
                        <Text style={styles.btnText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,

        backgroundColor: COLORS.white,
    },
    halfScreenImageSection: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    onBoardingImage: {
        width: '100%',
        height: '100%',
        borderRadius: SIZES.radius * 3,
    },
    textContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingContainer: {
        marginHorizontal: SIZES.padding * 1.5,
    },
    heading: {
        ...FONTS.h2,
        textAlign: 'center',
        textTransform: 'capitalize',
        lineHeight: SIZES.lineHeight * 1.5,
    },
    textContainer: {
        marginVertical: SIZES.padding * .5,
        marginHorizontal: SIZES.padding * 1.5,
    },
    text: {
        ...FONTS.body4,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: COLORS.darkGray,
        letterSpacing: 1,
    },
    btnContainer: {
        marginHorizontal: SIZES.padding * 1.5,
        marginVertical: SIZES.padding
    },
    btn: {
        ...FONTS.body2,
        textAlign: 'center',
        textTransform: 'capitalize',
        width: SIZES.width * .6,
        color: COLORS.white,
        backgroundColor: COLORS.primary,
        paddingVertical: SIZES.padding * .5,
        paddingHorizontal: SIZES.padding * 1.5,
        borderRadius: SIZES.radius * 3,
    },
    btnText: {
        ...FONTS.body2,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize',
        color: COLORS.white,
    },
})


export default OnBoarding;