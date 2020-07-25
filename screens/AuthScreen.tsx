import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import firebase from 'firebase';
import {useDispatch} from 'react-redux';
import {updateUser} from '../store/actions/user';
import {AuthenticationStyles as styles} from './authentication/Authenticate.style';
import {AuthFormValues} from './authentication/AuthenticationForm.service';

const AuthScreen = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [form, setForm] = React.useState<AuthFormValues>({
    email: '',
    password: ''
  })

  // TODO goto navigation
  const getCurrentUser = React.useCallback(async () => {
    const res = await firebase.auth().currentUser
    if (res !== null) {
      navigation.navigate('FindCoffee')
    }
    dispatch(updateUser(res))
  }, [])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Roasty</Text>
      </View>
    </SafeAreaView>
  )
}

export default AuthScreen;


