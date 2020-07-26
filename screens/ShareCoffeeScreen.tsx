import {Button, Platform, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import AppImagePicker from '../component/ImagePicker';
import AppToast from '../component/AppToast';
import {CoffeeForm} from '../firebase/tweet/tweet.http.service';

const ShareCoffeeScreen = () => {
  const now = new Date();
  const [coffeeForm, setCoffeeForm] = React.useState<CoffeeForm>({
    postedAt: now,
    storeName: '',
    originName: '',
    bitterTaste: '',
    acidityTaste: ''
  })
  const [show, setShow] = React.useState(false);

  const [visible, setVisible] = React.useState(false);
  const showToast = () => {
    setTimeout(() => {
      setVisible(true)
    }, 1000)
    setTimeout(() => {
      setVisible(false)
    }, 3000)
  }

  const onSubmit = () => {
    console.log(coffeeForm)
    showToast()
  }

  const onDateChange = (event: Event, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || coffeeForm.postedAt;
    setShow(Platform.OS === 'ios');
    setCoffeeForm({...coffeeForm, postedAt: currentDate})
  }

  const showDatepicker = () => {
    setShow(true)
  }
  const hiddenDatePicker = () => {
    setShow(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppToast message={'NICE SHARE 👏'} visible={visible}/>
      <View style={styles.contents}>
        <View style={styles.formItem}>
          <AppImagePicker/>
        </View>

        <View style={[styles.formItem, styles.datePicker]}>
          <Text style={styles.text}>日付</Text>
          <View>
            <Button onPress={show ? hiddenDatePicker : showDatepicker} title={show ? '閉じる' : '日付を選択'}/>
          </View>
        </View>
        <View>
          {show && (
            <DateTimePicker locale='ja' onChange={onDateChange} value={coffeeForm.postedAt} mode={'date'}
                            display='default'/>
          )}
        </View>
        <View style={styles.formItem}>
          <Text style={styles.text}>お店 / ロースター</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => setCoffeeForm({...coffeeForm, storeName: value})}
            value={coffeeForm.storeName}
            placeholder='roasty store'
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.text}>産地</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => setCoffeeForm({...coffeeForm, originName: value})}
            value={coffeeForm.originName}
            placeholder='tokyo'
          />
        </View>
        <View style={styles.selectGroup}>
          <View style={styles.selectPicker}>
            <Text style={styles.text}>苦味</Text>
            <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={level => setCoffeeForm({...coffeeForm, bitterTaste: level})}
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
            <Text style={styles.text}>酸味</Text>
            <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={level => setCoffeeForm({...coffeeForm, acidityTaste: level})}
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
        <View style={styles.formItem}>
          <Button
            onPress={onSubmit}
            title={'投稿する'}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ShareCoffeeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff'
  },
  input: {
    height: 36,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
    marginTop: 8
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  selectGroup: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
  selectPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contents: {
    padding: 16
  },
  formItem: {
    marginTop: 16
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 16
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginLeft: 8,
    width: 80,
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
