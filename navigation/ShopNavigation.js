import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Colors from '../colors/Colors';


import ProductsOverview from '../screens/shop/ProductsOverview';
import ProductDetails from '../screens/shop/ProductDetails';
import Cart from '../screens/shop/Cart';
import Orders from '../screens/shop/Orders';

const DefalutNavigationOprions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor,
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontFamily: 'Roboto-Medium'
    },
    headerTitleAlign: 'center'
}


const ShopNavigation = createStackNavigator({
    ProductOverview: ProductsOverview,
    Details: ProductDetails,
    Cart: Cart,


}, {

    defaultNavigationOptions: DefalutNavigationOprions
}
);

const OrderNavigation = createStackNavigator({
    Order: Orders
}, {
    defaultNavigationOptions: DefalutNavigationOprions
});

const appDrawer = createDrawerNavigator({
    Products: ShopNavigation,
    Order: OrderNavigation
}, {
    navigationOptions: {
        drawerLockMode: 'locked-close'
    },
    contentOptions: {
        activeTintColor: Colors.primaryColor,

        itemsContainerStyle: {
            marginVertical: 0,
        },
        iconContainerStyle: {
            opacity: 1
        }
    },
})





export default createAppContainer(appDrawer);