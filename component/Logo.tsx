import {Image, View} from 'react-native';
import React from 'react';

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

export default LogoImage
