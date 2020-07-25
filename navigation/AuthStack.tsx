import React from 'react';
import {AppHeaderOptions, Stack} from './Navigation.service';
import SignInScreen from '../screens/authentication/SignIn';
import SignUpScreen from '../screens/authentication/SignUp';
import FindCoffeeScreen from '../screens/FindCoffeeScreen';

const HeaderOptions = {
  ...AppHeaderOptions,
  title: 'Roasty'
}

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={HeaderOptions}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={HeaderOptions}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
