import {SafeAreaView, StyleSheet, Button, Text, View} from 'react-native';
import React from 'react';

const AuthScreen = () => {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Hello World!</Text>
        <Button
          title="Go to InvoiceEdit"
          onPress={() => {}}
        />
        <Button
          title="Go to Summary"
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  )
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {},

})
