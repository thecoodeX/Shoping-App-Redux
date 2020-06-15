import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import orderReducer from './store/reducers/order';

import ShopNavigation from './navigation/ShopNavigation';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';



const rootreducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  orders: orderReducer


});
const fetchFont = () => {
  return Font.loadAsync({
    'OpenSans-Regular': require('./font/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./font/OpenSans-Bold.ttf'),
    'OpenSans-SemiBold': require('./font/OpenSans-SemiBold.ttf'),
    'Roboto-Regular': require('./font/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./font/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./font/Roboto-Medium.ttf'),
  })


}

const store = createStore(rootreducer);


export default function App() {

  let [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFont}
      onFinish={() => {
        setFontLoaded(true);
      }} />
  }

  return (<Provider store={store}>
    <ShopNavigation />
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
