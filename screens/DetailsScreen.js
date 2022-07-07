import { BlurView } from 'expo-blur';
import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { icons, SIZES, COLORS, FONTS } from '../constants';

const DetailsScreen = ({ route, navigation }) => {
    const { item } = route.params;

    const [selectedVariant, setSelectedVariant] = React.useState(1);
    const [variants, setVariants] = React.useState([
        {
            id: 1,
            name: 'S',
        },
        {
            id: 2,
            name: 'M',
        },
        {
            id: 3,
            name: 'L',
        }
    ]);
    const [toggleReadMore, setToggleReadMore] = React.useState(false);











    return (
        <View style={styles.body}>
            <View style={styles.upperHalfScreen}>
                <ImageBackground source={item.image} imageStyle={styles.imageStyle} style={styles.upperHalfScreenBackground}>
                    <View style={styles.upperHalfScreenOverlay}>
                    </View>
                    <View style={styles.headers}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <BlurView
                                intensity={150}
                                style={styles.bookMark}>
                                <Image source={icons.left} style={{ ...styles.icon, tintColor: COLORS.white }} resizeMode="contain" />
                            </BlurView>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <BlurView
                                intensity={150}
                                style={styles.bookMark}>
                                <Image source={icons.bookmark} style={{ ...styles.icon, tintColor: COLORS.white }} resizeMode="contain" />
                            </BlurView>
                        </TouchableOpacity>

                    </View>

                </ImageBackground>
            </View>


            <View style={styles.centerDiv}>
                <Text style={styles.heading}>{item.title}</Text>
                <View style={styles.underDiv}>
                    <View>
                        <Text style={styles.subHeading}>{item.subTitle}</Text>
                        <View style={styles.ratingContainer}>
                            <Image source={icons.star} style={{ height: 16, width: 16, marginRight: 5, tintColor: COLORS.yellow }} resizeMode="contain" />
                            <Text style={styles.subHeading}>{item.rating}</Text>
                        </View>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={{ ...styles.heading, ...FONTS.h3 }}>₹ {item.price}</Text>
                    </View>
                </View>

            </View>


            <ScrollView style={styles.lowerHalfScreen}>
                <View style={{ marginTop: SIZES.padding * 4, marginHorizontal: SIZES.padding }}>


                    <View style={styles.descriptionContainer}>
                        <Text style={{ ...FONTS.body3 }}>{toggleReadMore ? item.description : item.description.slice(0, 250)}<Text onPress={() => setToggleReadMore(!toggleReadMore)} style={styles.readMore}> {toggleReadMore ? "...See Less" : "...Read More"} </Text></Text>

                    </View>


                    <View style={styles.variantSelectorContainer}>
                        {
                            variants.map(variant => {
                                return (
                                    <TouchableOpacity onPress={() => setSelectedVariant(variant.id)} key={variant.id} style={selectedVariant === variant.id ? styles.selectedVariantButton : styles.variantButton}>
                                        <Text style={{ ...FONTS.body3, color: selectedVariant === variant.id ? COLORS.white : COLORS.lightBrown }}>{variant.name}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>

                    <View style={styles.addToCartContainer}>
                        <TouchableOpacity style={styles.addToCartButton}>
                            <Text style={{ ...FONTS.h3, color: COLORS.white }}>Book Now</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        ...FONTS.h2,
        color: COLORS.darkGray,
    },
    upperHalfScreen: {
        flex: 1,

    },
    upperHalfScreenBackground: {
        flex: 1,
    },
    imageStyle: {
        borderBottomLeftRadius: SIZES.radius * 2,
        borderBottomRightRadius: SIZES.radius * 2,
    },
    upperHalfScreenOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderBottomLeftRadius: SIZES.radius * 2,
        borderBottomRightRadius: SIZES.radius * 2,
    },
    headers: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding,
        position: 'absolute',
    },

    bookMark: {
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
        borderRadius: SIZES.radius * 1.2,
        height: SIZES.height * .06,
        width: SIZES.height * .06,
        backgroundColor: COLORS.white,
    },
    icon: {
        tintColor: COLORS.lightBrown,
        height: SIZES.padding * 1.3,
        width: SIZES.padding * 1.3,
    },

    readMore: {
        color: COLORS.lightBrown,
        ...FONTS.h3,
    },
    variantSelectorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.padding,
    },
    variantButton: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.lightBrown,
        borderWidth: 1,
        width: SIZES.width * .25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.radius * 1.2,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding / 2,
        marginRight: SIZES.padding,
    },
    selectedVariantButton: {
        backgroundColor: COLORS.lightBrown,
        borderColor: COLORS.white,
        borderWidth: 1,
        width: SIZES.width * .25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.radius * 1.2,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding / 2,
        marginRight: SIZES.padding,
    },
    centerDiv: {
        position: 'absolute',
        top: SIZES.height * .45,
        height: SIZES.height * .15,
        width: SIZES.width * .9,
        zIndex: 5,
        borderRadius: SIZES.radius * 2,
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.padding,
        padding: SIZES.padding,
        backgroundColor: COLORS.white,
    },

    underDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.padding / 4,
    },
    ratingContainer: {
        marginVertical: SIZES.padding / 4,
        flexDirection: 'row',
        alignItems: 'center',
    },

    lowerHalfScreen: {
        flex: 1,
        backgroundColor: COLORS.white3,

    },
    addToCartContainer: {
        marginBottom: SIZES.padding,
        alignItems: 'center',

    },
    addToCartButton: {
        height: SIZES.height * .07,
        backgroundColor: COLORS.lightBrown,
        borderRadius: SIZES.radius * 2,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding / 2,
        width: SIZES.width * .9,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default DetailsScreen;





