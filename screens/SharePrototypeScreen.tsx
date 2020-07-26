import {Alert, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createTweet, PostedTweet, Tweet} from '../firebase/tweet/tweet.http.service';
import RNPickerSelect from 'react-native-picker-select';
import {Button, TextInput} from 'react-native-paper';
import {useSelector} from 'react-redux';

const SharePrototypeScreen = () => {
  const [form, setForm] = React.useState<Tweet>({
    roasterName: '',
    acidityTaste: '',
    bitterTaste: '',
    comment: '',
    originName: '',
    productName: '',
    storeName: '',
    postedAt: new Date()
  })
  const loginUser = useSelector((state: any) => state.user.user)

  const onSubmit = () => {
    const data: PostedTweet = {
      user: {
        displayName: loginUser.displayName,
        uid: loginUser.uid
      },
      tweet: {
        storeName: form.storeName,
        roasterName: form.roasterName,
        originName: form.originName,
        productName: form.productName,
        comment: form.comment,
        bitterTaste: form.bitterTaste,
        acidityTaste: form.acidityTaste,
        postedAt: new Date()
      }
    }
    createTweet(data).then((res) => {
      Alert.alert('投稿しました')
    })
  }

  return (
    <SafeAreaView style={styles.sharePrototype}>
      <KeyboardAvoidingView behavior={'padding'}>
        <ScrollView>
          <View style={styles.formItem}>
            <Text style={styles.label}>お店</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => setForm({...form, storeName: value})}
              value={form.storeName}
              placeholder='roasty store'
            />
          </View>
          <View style={styles.formItem}>
            <Text style={styles.label}>ロースター</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => setForm({...form, roasterName: value})}
              value={form.roasterName}
              placeholder='roasty roster'
            />
          </View>
          <View style={styles.formItem}>
            <Text style={styles.label}>産地</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => setForm({...form, originName: value})}
              value={form.originName}
              placeholder='日本'
            />
          </View>
          <View style={styles.formItem}>
            <Text style={styles.label}>製品名</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => setForm({...form, productName: value})}
              value={form.productName}
              placeholder='roasty original'
            />
          </View>
          <View style={styles.formItem}>
            <Text style={styles.label}>コメント</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => setForm({...form, comment: value})}
              value={form.comment}
              placeholder='ほのかにビターを感じる味わい'
            />
          </View>
          <View style={styles.selectPickerWrap}>
            <View style={styles.selectPicker}>
              <Text style={styles.label}>苦味</Text>
              <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={level => setForm({...form, bitterTaste: level})}
                items={[
                  {label: '1', value: '1'},
                  {label: '2', value: '2'},
                  {label: '3', value: '3'},
                  {label: '4', value: '4'},
                  {label: '5', value: '5'},
                ]}
              />
            </View>
            <View style={styles.selectPicker}>
              <Text style={styles.label}>酸味</Text>
              <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={level => setForm({...form, acidityTaste: level})}
                items={[
                  {label: '1', value: '1'},
                  {label: '2', value: '2'},
                  {label: '3', value: '3'},
                  {label: '4', value: '4'},
                  {label: '5', value: '5'},
                ]}
              />
            </View>
          </View>
          <View style={styles.buttonWrap}>
            <Button
              mode={'contained'}
              onPress={onSubmit}
              style={styles.button}
            >投稿する</Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
export default SharePrototypeScreen

const styles = StyleSheet.create({
  input: {},
  selectPicker: {},
  label: {
    fontSize: 14,
    padding: 8
  },
  sharePrototype: {
    padding: 16
  },
  selectPickerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonWrap: {
    marginTop: 16,
    padding: 8
  },
  formItem: {
    marginTop: 8,
    padding: 8
  },
  button: {
    height: 44,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginLeft: 8,
    width: 160,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    marginLeft: 8,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
