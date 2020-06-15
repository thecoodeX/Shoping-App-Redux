import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../colors/Colors';

import * as cartAction from '../../store/actions/cart';

const ProductDetails = (props) => {

    const productId = props.navigation.getParam('productId');
    const product = useSelector(state => state.product.avilableProducts.find(prod => prod.id === productId));

    const dispatch = useDispatch();


    return <ScrollView>
        <View style={style.container}>

            <View >
                <Image style={style.image}
                    source={{ uri: product.imageUrl }}
                ></Image>

            </View>
            <Text style={style.title}>
                {product.title}
            </Text>
            <Text style={style.description}>
                {product.description}
            </Text >
            <Text style={style.price}>
                ₹ {product.price.toFixed(2)}
            </Text>
            <Button
                fontFamily='Roboto-Medium'
                color={Colors.primaryColor}
                title='add to cart'
                onPress={() => { dispatch(cartAction.addToCart(product)) }}

            ></Button>

        </View>
    </ScrollView>
};

ProductDetails.navigationOptions = navData => {

    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
}

const style = StyleSheet.create({
    container: {
        flex: 1,


    }, image: {
        flex: 1,
        height: 300,
        width: '100%'
    }, title: {
        textAlign: 'center',
        fontSize: 23,

        margin: 3,
        fontFamily: 'Roboto-Bold'
    },
    price: {
        textAlign: 'center',
        fontSize: 18,

        margin: 3,
        fontFamily: 'Roboto-Medium'
    }, description: {
        textAlign: 'center',
        fontSize: 18,

        margin: 3,
        fontFamily: 'OpenSans-Regular'
    }
})


export default ProductDetails;