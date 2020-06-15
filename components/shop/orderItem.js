import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import CartTile from './cartItem';
import Colors from '../../colors/Colors';
import Card from '../Card';



const OrderItem = props => {

    const [showDetails, setShowDetails] = useState(false);

    return <Card style={style.card}>
        <View style={style.container}>
            <View style={style.v1}>
                <Text style={style.total}>  Total: ₹ {props.Amount} </Text>
                <View>
                    <Text style={style.date}>  {props.Date}</Text>
                </View>

            </View>

            <View style={style.v2}>
                <Button
                    onPress={() => { setShowDetails(prevState => !prevState) }}
                    title='show Details'
                    style={style.button} color={Colors.primaryColor}
                    fontFamily='Roboto-Regular' />
                {showDetails &&
                    <View style={style.showDetails}>
                        {props.items.map(cartItem => <CartTile
                            title={cartItem.productTitle}
                            qty={cartItem.quantity}
                            key={cartItem.productId}
                            price={cartItem.sum}


                        />)}

                    </View>}
            </View>
        </View>
    </Card>
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 10


    }, v1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden'
    },
    total: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18
    },
    date: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        padding: 10
    }, button: {
        margin: 20,

    }, card: {
        margin: 10
    }, v2: {
        margin: 10,
        width: '100%',

    }, showDetails: {
        width: '100%',
        flex: 1
    }

});


export default OrderItem;