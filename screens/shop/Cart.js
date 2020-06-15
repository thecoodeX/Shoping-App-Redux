import React from 'react';
import { Text, View, StyleSheet, Button, Dimensions, FlatList } from 'react-native';
import Card from '../../components/Card';

import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../colors/Colors'

import CartTile from '../../components/shop/cartItem';

import * as cartAction from '../../store/actions/cart';
import * as orderAction from '../../store/actions/order';


const Cart = (props) => {

    const CartTotal = useSelector(state => state.cart.totalAmount)

    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            });
        }
        return transformedCartItems.sort((a, b) => a.productId > b.productId ? 1 : -1); //To Preserve Cart Order
    });
    const dispatch = useDispatch();

    return <View style={style.container}>
        <Card style={style.card}>
            <View style={style.v1}>

                <Text style={style.title1}>
                    Total: ₹ <Text style={style.title2}>
                        {CartTotal.toFixed(2)}
                    </Text>
                </Text>
                <View>
                    <Button title='Place Order' color={Colors.primaryColor}
                        onPress={() => { dispatch(orderAction.addOrder(cartItems, CartTotal)) }}

                    >
                    </Button>
                </View>
            </View>
        </Card>
        <View>
            <FlatList

                data={cartItems}

                keyExtractor={item => item.productId}
                renderItem={itemData => (
                    <CartTile
                        title={itemData.item.productTitle}
                        qty={itemData.item.quantity}
                        price={itemData.item.productPrice}
                        deletable
                        onRemove={() => {
                            dispatch(cartAction.removeFromCart(itemData.item.productId));
                        }}


                    />)}

            />



        </View>
    </View>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,


    },
    v1: {
        height: 80,
        marginHorizontal: 10,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'


    },
    card: {
        margin: 10
    },
    title1: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18
    },
    title2: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 18

    }
})


export default Cart;