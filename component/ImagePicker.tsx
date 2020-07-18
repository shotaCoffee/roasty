import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const AppImagePicker = () => {
  const [imageUri, setImage] = React.useState<string | null>(null)
  // TODO https://docs.expo.io/versions/latest/sdk/camera/
  // const [permission, setPermission] = React.useState<string | null>(null)
  //
  // const getPermissionAsync = React.useCallback(async () => {
  //   if (Constants.platform && Constants.platform.ios) {
  //     const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //     if (status !== 'granted') {
  //       alert('Sorry, we need camera roll permissions to make this work!');
  //     }
  //     setPermission(status)
  //   }
  // }, []);
  //
  // React.useEffect(() => {
  //   getPermissionAsync();
  // }, [])
  // const takePhoto = async () => {
  //   let result = await ImagePicker.launchCameraAsync({
  //     allowsEditing: permission
  //   });
  //   console.log(result)
  //   if (!result.cancelled) {
  //     setImage(result.uri)
  //   }
  // }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9]
    });

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return (
    <View style={styles.containerStyle}>
      <Text>画像を選択</Text>
      {/*<Button title='カメラを起動' onPress={takePhoto}/>*/}
      <Button title='カメラロールから選択' onPress={pickImage}/>
      {
        imageUri &&
        <Image source={{uri: imageUri}}
               style={styles.image}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
  }
})

export default AppImagePicker;
