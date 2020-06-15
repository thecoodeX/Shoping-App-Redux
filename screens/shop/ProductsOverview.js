import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ProductTile from '../../components/shop/productTile';
import HeaderButton from '../../components/ui/HeaderButton';

import * as cartAction from './../../store/actions/cart';

import { useSelector, useDispatch } from 'react-redux';


const ProductsOverview = (props) => {

    const product = useSelector(state => state.product.avilableProducts);

    const dispatch = useDispatch();

    const RenderItem = (itemData) => {

        return <ProductTile

            title={itemData.item.title}
            imageBackground={itemData.item.imageUrl}
            price={itemData.item.price}
            details={() => { props.navigation.navigate('Details', { productId: itemData.item.id, productTitle: itemData.item.title }) }}
            cart={() => { dispatch(cartAction.addToCart(itemData.item)) }}
        />


    }

    return <View style={style.container}>
        <FlatList
            data={product}
            keyExtractor={(item, index) => item.id}
            renderItem={RenderItem}

        />


    </View>
};

ProductsOverview.navigationOptions = navData => {
    return {
        headerTitle: 'HOME',
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

const style = StyleSheet.create({
    container: {
        flex: 1,

    }
})


export default ProductsOverview;