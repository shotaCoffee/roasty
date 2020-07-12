import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import FindCoffeeScreen from '../screens/FindCoffeeScreen';
import MyCoffeesScreen from '../screens/MyCoffeesScreen';
import ShareCoffeeScreen from '../screens/ShareCoffeeScreen';
import {View, Image, Text} from 'react-native';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const LogoImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={require('../assets/dummy.jpg')} style={{width: 40, height: 40}}/>
    </View>
  )
}

const appHeaderOptions = {
  headerLeft: () => (
    <LogoImage/>
  )
}

const FindStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Find Coffee"
        component={FindCoffeeScreen}
        options={appHeaderOptions}
      />
    </Stack.Navigator>
  )
}

const ShareStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Share Coffee"
        component={ShareCoffeeScreen}
        options={appHeaderOptions}
      />
    </Stack.Navigator>
  )
}

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Coffees"
        component={MyCoffeesScreen}
        options={appHeaderOptions}
      />
    </Stack.Navigator>
  )
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="FindCoffee" component={FindStack}/>
        <Tab.Screen name="ShareCoffee" component={ShareStack}/>
        <Tab.Screen name="MyCoffees" component={MyStack}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

