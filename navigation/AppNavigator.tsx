import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import FindCoffeeScreen from '../screens/FindCoffeeScreen';
import MyCoffeesScreen from '../screens/MyCoffeesScreen';
import ShareCoffeeScreen from '../screens/ShareCoffeeScreen';
import {Image, Route, View} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import {Provider as PaperProvider} from 'react-native-paper';
import AuthScreen from '../screens/AuthScreen';
import { Provider } from 'react-redux';
import store from '../store';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const LogoImage = () => {
  return (
    <View style={{flexDirection: 'row', padding: 8, alignItems: 'center'}}>
      <Image
        source={require('../assets/bean.svg')}
        style={{width: 40, height: 40, resizeMode: 'contain'}}
      />
    </View>
  )
}

const appHeaderOptions = {
  headerLeft: () => (
    <LogoImage/>
  )
}

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ログイン"
        component={AuthScreen}
        options={appHeaderOptions}
      />
    </Stack.Navigator>
  )
}

const FindStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FindCoffee"
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
        name="ShareCoffee"
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
        name="MyCoffees"
        component={MyCoffeesScreen}
        options={appHeaderOptions}
      />
    </Stack.Navigator>
  )
}

type ScreenOptionIconProps = {
  color: string | undefined
  size: number | undefined
}

const screenOption = ({route}: Route) => ({
  tabBarIcon: ({color, size}: ScreenOptionIconProps) => {
    let iconName;

    switch (route.name) {
      case 'FindCoffee':
        iconName = 'home';
        break
      case 'ShareCoffee':
        iconName = 'share-alt';
        break;
      case 'MyCoffees':
        iconName = 'coffee';
        break
      default:
        iconName = 'coffee'
    }

    return <FontAwesome name={iconName} size={size} color={color}/>
  },

  tabBarVisible: route.name.name !== 'Auth'
})


const AppNavigator = () => {

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOption}>
            <Tab.Screen name="Auth" component={AuthStack}/>
            <Tab.Screen name="FindCoffee" component={FindStack}/>
            <Tab.Screen name="ShareCoffee" component={ShareStack}/>
            <Tab.Screen name="MyCoffees" component={MyStack}/>
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}

export default AppNavigator

