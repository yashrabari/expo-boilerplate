import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//importing styles
import rootStyles from '../styles/rootStyles';

const Cart = () => {
    return (
        <View style={rootStyles.body}>
            <Text style={rootStyles.heading} >Cart</Text>
        </View>
    );
}


export default Cart;
