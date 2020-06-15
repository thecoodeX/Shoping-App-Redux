import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import HeaderButton from '../../components/ui/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { useSelector } from 'react-redux';
import OrderItem from '../../components/shop/orderItem';

const Orders = (props) => {

    const order = useSelector(state => state.orders.orders);

    const RenderItem = itemData => {
        return <OrderItem
            Amount={itemData.item.totalAmount}
            Date={itemData.item.dateReader}
            items={itemData.item.items}
            
        />
    }

    return <View style={style.container}>
        <FlatList
            data={order}
            keyExtractor={item => item.id}
            renderItem={RenderItem}


        />
    </View>
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
});

Orders.navigationOptions = navData => {
    return {
        headerTitle: 'Orders',
        headerRight: () => (<HeaderButtons
            HeaderButtonComponent={HeaderButton}>
            <Item
                title='Cart'
                iconName='md-cart'
                onPress={() => { navData.navigation.navigate('Cart') }}
            />
        </HeaderButtons>),
        headerLeft: () => (<HeaderButtons
            HeaderButtonComponent={HeaderButton}>
            <Item
                title='Menu'
                iconName='md-menu'
                onPress={() => { navData.navigation.toggleDrawer(); }}
            />
        </HeaderButtons>),

    }
}


export default Orders;