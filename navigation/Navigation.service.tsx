import LogoImage from '../component/Logo';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Route} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

export const Stack = createStackNavigator()
export const Tab = createBottomTabNavigator()

export const AppHeaderOptions = {
  headerLeft: () => (
    <LogoImage/>
  )
}

type ScreenOptionIconProps = {
  color: string | undefined
  size: number | undefined
}

export const screenOption = ({route}: Route) => ({
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
});

