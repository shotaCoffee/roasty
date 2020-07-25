import {AppHeaderOptions, Stack} from './Navigation.service';
import ShareCoffeeScreen from '../screens/ShareCoffeeScreen';
import React from 'react';

const ShareStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShareCoffee"
        component={ShareCoffeeScreen}
        options={AppHeaderOptions}
      />
    </Stack.Navigator>
  )
}

export default ShareStack
