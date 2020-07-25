import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

import {Provider} from 'react-redux';
import store from '../store';

import {screenOption, Tab} from './Navigation.service';
import AuthStack from './AuthStack';
import FindStack from './FindStack';
import ShareStack from './ShareStack';
import MyStack from './MyStack';

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

