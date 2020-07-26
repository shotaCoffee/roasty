import {AppHeaderOptions, Stack} from './Navigation.service';
// import ShareCoffeeScreen from '../screens/ShareCoffeeScreen';
import React from 'react';
import SharePrototypeScreen from '../screens/SharePrototypeScreen';

const ShareStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShareCoffee"
        component={SharePrototypeScreen}
        options={AppHeaderOptions}
      />
    </Stack.Navigator>
  )
}

export default ShareStack
