import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ space }) => {
    return (
        <View>
            <View style={{ height: space * 10 }} />
        </View>
    );
}



export default Spacer;
