import {AppHeaderOptions, Stack} from './Navigation.service';
import MyCoffeesScreen from '../screens/MyCoffeesScreen';
import React from 'react';


const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyCoffees"
        component={MyCoffeesScreen}
        options={AppHeaderOptions}
      />
    </Stack.Navigator>
  )
}

export default MyStack
