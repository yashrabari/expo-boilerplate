import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ImageBackground, ScrollView } from 'react-native';
import { COLORS, SIZES, images, FONTS, icons } from '../constants';


//importing custom component
import Spacer from '../components/Spacer';





var cakeList = [
    {
        id: 1,
        title: 'Black Forest Cake',
        image: images.blackForest,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '10.00',
        rating: '4.5',
        reviews: '100',
        isFav: false,
        isSoldOut: false,
        isNew: false,
        isDiscount: false,
        isSale: false,
        isHot: false,
    },
    {
        id: 2,
        title: 'White Forest Cake',
        image: images.whiteForest,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '10.00',
        rating: '4.5',
        reviews: '100',
        isFav: false,
        isSoldOut: false,
        isNew: false,
        isDiscount: false,
        isSale: false,
        isHot: false,
    },
]







const Home = ({ navigation }) => {

    const [cakeData, setCakeData] = React.useState(cakeList);



    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <View style={styles.avatarSection}>
                    <Image source={images.avatar} style={styles.avatar} />
                </View>
                <View style={styles.locationSection}>
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
                <TouchableOpacity style={styles.searchSection}>
                    <Image source={icons.search} style={styles.icon} resizeMode="contain" />
                    <View style={styles.searchHolder}>
                        <Text
                            style={styles.searchInput}
                        >
                            Search
                        </Text>
                    </View>
                </TouchableOpacity>
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


    const RenderRecommendedItems = ({ cake }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("Details", {
                    item: cake

                })}
                style={styles.recommendedItem}>
                {console.log(cake)}
                <ImageBackground source={cake.image} style={styles.recommendedItemImageBackground}>

                    <LinearGradient
                        colors={['rgba(0,0,0,0.9)', "#ffffff00"]}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.darkOverlay}></LinearGradient>
                    <TouchableOpacity>
                        <BlurView
                            intensity={150}
                            style={styles.bookMark}>
                            <Image source={icons.bookmark} style={{ ...styles.icon, tintColor: COLORS.white }} resizeMode="contain" />
                        </BlurView>
                    </TouchableOpacity>
                    <View style={styles.recommendedTextHolder}>
                        <Text style={styles.recommendedText}>
                            {cake.title}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>

                            <Image source={icons.star} style={{ ...styles.icon, tintColor: null, marginRight: SIZES.padding / 4 }} resizeMode="contain" />
                            <Text style={styles.rating}>
                                {cake.rating}
                            </Text>
                        </View>
                    </View>
                </ImageBackground>

            </TouchableOpacity>
        )
    }



    const renderRecommended = () => {
        return (
            <View style={styles.divSection}>
                <Text style={styles.heading}>Recomended</Text>
                <View style={styles.listHolder}>

                    {/* render Recommended item*/}
                    <FlatList
                        data={cakeData}
                        renderItem={({ item }) => (
                            <RenderRecommendedItems cake={item} />
                        )}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}

                    />


                </View>
            </View>

        )
    }


    const RenderLastOrder = ({ cake }) => {
        return (
            <View style={styles.lastOrderItem}>
                <Image source={cake.image} style={styles.lastOrderImage} />
                <View style={styles.lastOrderTextHolder}>
                    <Text style={styles.lastOrderText}>
                        {cake.title}
                    </Text>
                    <Text style={styles.lastOrderPrice}>
                        ₹{cake.price}
                    </Text>
                </View>
            </View>
        )
    }



    const renderLastOrder = () => {
        return (
            <View style={styles.divSection}>
                <Text style={styles.heading}>Last Ordered</Text>
                <View style={styles.listHolder}>
                    <FlatList
                        data={cakeData}
                        renderItem={({ item }) => (
                            <RenderLastOrder cake={item} />
                        )}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }



    return (
        <SafeAreaView style={styles.body}>
            {/** render header for home screen */}
            {renderHeader()}
            <Spacer space={1} />
            {/** render search for home screen */}
            {renderSearch()}
            <Spacer space={1} />
            <ScrollView>
                {/** render Recommended for home screen */}
                {renderRecommended()}
                <Spacer space={1} />
                {/** render Last Order for home screen */}
                {renderLastOrder()}

            </ScrollView>
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

        shadowOpacity: 0.75,
        shadowRadius: 5,

        elevation: 5,
    },

    searchHolder: {
        marginLeft: SIZES.padding / 2,
        flex: 1,
        height: SIZES.padding,
    },
    searchInput: {
        ...FONTS.body2,
        fontSize: SIZES.font * 1.3,
        color: COLORS.darkGray,
    },
    filterSection: {
        borderWidth: 1,
        padding: SIZES.padding / 2,
        backgroundColor: COLORS.lightBrown,
        borderColor: COLORS.lightBrown,
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

    divSection: {
        paddingHorizontal: SIZES.padding,
    },

    heading: {
        ...FONTS.h2,
        color: COLORS.darkGray,
        marginVertical: SIZES.padding / 2,
    },

    listHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rating: {
        ...FONTS.body2,
        fontSize: SIZES.font * 1.3,
        color: COLORS.white,
    },

    lastOrderItem: {
        width: SIZES.width * .7,
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius * 1.5,
        overflow: 'hidden',
        alignItems: 'center',
        marginRight: SIZES.padding / 2,
        paddingVertical: SIZES.padding / 2,
        borderColor: COLORS.lightGray,
        borderWidth: 1,
    },
    lastOrderImage: {
        marginLeft: SIZES.padding / 2,
        borderRadius: SIZES.radius * 2,
        height: SIZES.height * .1,
        width: SIZES.width * .2,
    },
    lastOrderTextHolder: {
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: SIZES.padding,
    },
    lastOrderText: {
        ...FONTS.body3,
        fontSize: SIZES.font * 1.3,
        color: COLORS.darkGray,
    },
    lastOrderPrice: {
        marginTop: SIZES.padding / 4,
        ...FONTS.body4,
        color: COLORS.darkGray,
    },
    recommendedText: {
        ...FONTS.h2,
        color: COLORS.white,
    },
    recommendedTextHolder: {
        marginVertical: SIZES.padding / 2,
        marginHorizontal: SIZES.padding,
        position: 'absolute',
        bottom: 0,
        zIndex: 5,
    },

    recommendedItemImageBackground: {
        height: SIZES.height * .4,
        width: SIZES.width * .7,
        borderRadius: SIZES.radius * 1.5,
        overflow: 'hidden',
        marginTop: SIZES.margin,
    },
    recommendedItem: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: SIZES.padding / 2,
        paddingVertical: SIZES.padding / 2,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    darkOverlay: {
        position: 'absolute',
        height: SIZES.height * .4,
        width: SIZES.width * .7,
        borderRadius: SIZES.radius * 1.5,
        overflow: 'hidden',

        zIndex: 4
    },
    bookMark: {
        position: 'absolute',
        right: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'center',
        top: SIZES.padding,
        zIndex: 5,
        borderRadius: SIZES.radius * 1.2,
        height: SIZES.height * .06,
        width: SIZES.height * .06,
        backgroundColor: COLORS.white,
    },
})


export default Home;
