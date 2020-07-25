import AuthScreen from '../screens/AuthScreen';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppHeaderOptions, Stack} from './Navigation.service';


const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ログイン"
        component={AuthScreen}
        options={AppHeaderOptions}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
