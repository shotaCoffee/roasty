import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {screenOption, Tab} from './Navigation.service';
import AuthStack from './AuthStack';
import FindStack from './FindStack';
import ShareStack from './ShareStack';
import MyStack from './MyStack';
import {RootState} from '../store';

const AppNavigator = () => {
  const user = useSelector<RootState>(state => state.user);

  return (
    !user ? (
      <NavigationContainer>
        <AuthStack/>
      </NavigationContainer>
    ) : (
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOption}>
          <Tab.Screen name="FindCoffee" component={FindStack}/>
          <Tab.Screen name="ShareCoffee" component={ShareStack}/>
          <Tab.Screen name="MyCoffees" component={MyStack}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  )
}

export default AppNavigator

