import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

//importing components
import Spacer from '../components/Spacer';
import Header from '../components/Header';




const cartList = [
    {
        id: 1,
        name: 'Item 1',
        price: '$10',
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        name: 'Item 2',
        price: '$20',
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
]






const Cart = ({ navigation }) => {


    const [cartItems, setCartItems] = React.useState([]);






    const renderSelectFromProducts = () => {
        return (
            <View style={styles.displayMsgSection}>
                <Text style={styles.displayMsg} >Oops! Your Cart Is Empty.</Text>
                <TouchableOpacity style={styles.displayBtn} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.displayBtnMsg} >Let's Get Sweets</Text>
                </TouchableOpacity>
            </View>
        )
    }




    return (
        <View style={styles.body}>
            {/* render header*/}
            <Header name="Cart" />
            {/* render cart items*/}
            <Spacer space={1} />

            {cartItems && cartItems.length > 0 ? renderCartItems() : renderSelectFromProducts()}



        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        marginTop: SIZES.statusbar,
        flex: 1,
        backgroundColor: COLORS.white2
    },

    displayMsgSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    displayMsg: {
        ...FONTS.body2,
        color: COLORS.black,
        fontSize: SIZES.font * 1.5
    },
    displayBtn: {
        borderColor: COLORS.darkBrown,
        borderWidth: 1,
        paddingVertical: SIZES.padding / 2,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.radius,
        marginTop: SIZES.padding
    },
    displayBtnMsg: {
        ...FONTS.body4,
        color: COLORS.darkBrown,
    },
});



export default Cart;
