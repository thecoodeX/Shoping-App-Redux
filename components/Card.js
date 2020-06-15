import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={{ ...style.card, ...props.style }}>
        {props.children}

    </View>

}


const style = StyleSheet.create({
    card: {
        // width: '100%',
        // alignItems: 'center',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: 'white'
    }


});


export default Card;