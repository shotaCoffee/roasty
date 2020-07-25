import {AppHeaderOptions, Stack} from './Navigation.service';
import FindCoffeeScreen from '../screens/FindCoffeeScreen';
import React from 'react';

const FindStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FindCoffee"
        component={FindCoffeeScreen}
        options={AppHeaderOptions}
      />
    </Stack.Navigator>
  )
}

export default FindStack
