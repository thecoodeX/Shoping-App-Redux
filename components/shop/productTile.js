import React from 'react';
import { Text, StyleSheet, View, Dimensions, Image, Button, TouchableWithoutFeedback } from 'react-native';

import Card from '../Card'
import Colors from '../../colors/Colors';


const ProductTile = props => {
    return <Card style={style.container}>
        <TouchableWithoutFeedback
            onPress={props.details}>
            <View style={style.v1} >
                <Image style={style.bg}
                    source={{ uri: props.imageBackground }}
                >

                </Image>
                <View style={style.textContainer}>
                    <Text style={style.title}>
                        {props.title}
                    </Text>
                    <Text style={style.subtitle}>
                        ₹ {props.price}
                    </Text>
                </View>
                <View style={style.buttonView}>
                    <View style={style.buttonContainer}>
                        <Button title='Details'
                            color={Colors.primaryColor}
                            onPress={props.details}
                            fontFamily='Roboto-Medium' />
                    </View>
                    <View style={style.buttonContainer}>
                        <Button title='add to cart'
                            color={Colors.primaryColor}
                            onPress={props.cart}
                            fontFamily='Roboto-Medium' />
                    </View>
                </View>


            </View>
        </TouchableWithoutFeedback>
    </Card >
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 10,

    }, v1: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 10,
    }, bg: {
        height: 150,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonView: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        width: '40%',

    },
    title: {
        fontSize: 20,

        fontFamily: 'Roboto-Bold'
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular'
    },
    textContainer: {
        paddingVertical: 10,
    }
});

export default ProductTile;