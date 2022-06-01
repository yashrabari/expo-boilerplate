import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//importing themeing
import { COLORS, FONTS, SIZES } from '../constants';

const Header = ({ name }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: SIZES.height * .07,
        paddingHorizontal: SIZES.padding,
        justifyContent: 'center',
        elevation: 2,
        backgroundColor: COLORS.white,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    },
    headerText: {
        ...FONTS.body2
    },
})

export default Header;
