import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native';
import { COLORS, SIZES, images, FONTS, icons } from '../constants';


//importing custom component
import Spacer from '../components/Spacer';




const Home = () => {





    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <View style={styles.avatarSection}>
                    <Image source={images.avatar2} style={styles.avatar} />
                </View>
                <View style={styles.locationSection}>
                    <Image source={icons.location} style={{ ...styles.icon, width: 18 }} resizeMode="contain" />
                    <Text style={styles.locationText}>Rannade, Shilaj</Text>
                </View>
                <View style={styles.notificationSection}>
                    <Image source={icons.notification} style={styles.icon} resizeMode="contain" />
                </View>
            </View>
        )
    }


    const renderSearch = () => {
        return (
            <View style={styles.searchAndFilterSection}>
                <View style={styles.searchSection}>

                </View>
                <View style={styles.filterSection}>
                    <View style={styles.filterIconSection}>
                        <Image source={icons.filter} style={{
                            ...styles.icon,
                            tintColor: COLORS.white
                        }} resizeMode="contain" />
                    </View>
                </View>
            </View>
        )
    }




    return (
        <SafeAreaView style={styles.body}>
            {/** render header for home screen */}
            {renderHeader()}
            <Spacer space={2} />
            {/** render search for home screen */}
            {renderSearch()}

        </SafeAreaView>
    );
}



const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: COLORS.white2,
        marginTop: SIZES.statusbar
    },

    header: {
        height: SIZES.height * .10,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
    },

    avatarSection: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.radius * 2,
        height: SIZES.height * .06,
        width: SIZES.height * .06,
    },
    avatar: {
        height: SIZES.height * .06,
        width: SIZES.height * .06,
        borderRadius: SIZES.radius * 2,
    },
    notificationSection: {
        borderWidth: 1,
        padding: SIZES.padding / 2,
        backgroundColor: COLORS.lightGray,
        borderColor: COLORS.lightGray,
        borderRadius: SIZES.radius * 1.5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,

        elevation: 10,

    },
    locationSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationText: {
        ...FONTS.body2,
        fontSize: SIZES.font * 1.3,
        marginLeft: SIZES.padding / 4,
        color: COLORS.black,

    },
    icon: {
        tintColor: COLORS.lightBrown,
        height: SIZES.padding,
        width: SIZES.padding,
    },
    searchAndFilterSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
    },

    searchSection: {
        height: SIZES.height * .06,
        backgroundColor: COLORS.white,
        width: SIZES.width * .7,
        borderRadius: SIZES.radius * 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SIZES.padding,
        marginTop: SIZES.margin,
    },
    searchIconSection: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.radius * 2,
        height: SIZES.height * .06,
        width: SIZES.height * .06,
    },
    filterSection: {
        borderWidth: 1,
        padding: SIZES.padding / 2,
        backgroundColor: COLORS.darkGray,
        borderColor: COLORS.darkGray,
        borderRadius: SIZES.radius * 1.5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,

        elevation: 10,

    },

})


export default Home;
