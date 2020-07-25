import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import './firebase/firebase'
import {Provider} from 'react-redux';
import store from './store';
import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppNavigator/>
      </PaperProvider>
    </Provider>
  );
}
