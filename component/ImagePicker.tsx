import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {storage} from '../firebase/firebase';
import {ImagePickerResult} from 'expo-image-picker';
import {ImageInfo} from 'expo-image-picker/build/ImagePicker.types';
// export type ImageType = {
//   width: number
//   cancelled: boolean
//   height: number
//   uri: string
//   type: string
// }

export type AppImagePicker = {
  imageId: string
}

const AppImagePicker = ({imageId}: AppImagePicker) => {
  const [imageInfo, setImage] = React.useState<ImagePickerResult & ImageInfo | null>(null)
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
      aspect: [16, 9],
      quality: 0.7,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (!result.cancelled) {
      setImage(result)
      console.log({imageId, imageInfo})
    }
  }

  const handleUpload = async () => {
    // NOTE バリデータ
    if (imageInfo === null) {
      return
    }
    // NOTE blob作成
    const response = await fetch(imageInfo.uri);
    const blob = await response.blob();
    // NOTE refを作る
    const storageRef = storage.ref();
    const tweetImagesRef = storageRef.child('tweetImages');
    const avatarImagesRef = storageRef.child('avatarImages');
    // NOTE tweetImages/${imageId(uuidv4)} のref作成
    const ref = tweetImagesRef.child(imageId)
    // 保存
    return ref.put(blob).then((res) => {
      console.log(`firestore`, res)
      setImage(null)
    })
  }

  const getImageByUUID = () => {
    const storageRef = storage.ref();
    const tweetImagesRef = storageRef.child('tweetImages');
    const ref = tweetImagesRef.child(imageId)

    ref.getDownloadURL().then((url) => {
      setImage({
        base64: imageInfo?.base64,
        cancelled: Boolean(imageInfo?.cancelled),
        exif: imageInfo?.exif,
        height: Number(imageInfo?.height),
        type: imageInfo?.type,
        uri: url,
        width: Number(imageInfo?.width)
      })
    })
  }

  return (
    <View style={styles.containerStyle}>
      <Text>画像を選択</Text>
      {/*<Button title='カメラを起動' onPress={takePhoto}/>*/}
      <Button title='カメラロールから選択' onPress={pickImage}/>
      {
        imageInfo &&
        <Image source={{uri: imageInfo.uri}}
               style={styles.image}/>
      }
      <Button title={'アップロード'} onPress={handleUpload}/>
      <Button title={'キャンセル'} onPress={() => setImage(null)}/>
      <Button title={'取得'} onPress={getImageByUUID}/>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'column',
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
