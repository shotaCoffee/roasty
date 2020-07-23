import {SafeAreaView, StyleSheet, Button, Text, View, Alert, TextInput} from 'react-native';
import React from 'react';
import firebase, {auth, User} from 'firebase';
import {useDispatch} from 'react-redux';
import {updateUser} from '../store/actions/user';

type AuthFormValues = {
  email: string
  password: string
}

const AuthScreen = (props:any) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [form, setForm] = React.useState<AuthFormValues>({
    email: '',
    password: ''
  })
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [firebaseUser, setUser] = React.useState<User | null>(null)

  const getCurrentUser = React.useCallback(async () => {
    const res = await firebase.auth().currentUser
    if (res !== null) {
      navigation.navigate('FindCoffee')
    }
    setUser(res)
    dispatch(updateUser(res))
  }, [])

  React.useEffect(() => {
    getCurrentUser()
  }, [])

  const handleSignIn = () => {
    handleError(form);
    setLoading(true)
    auth().signInWithEmailAndPassword(form!.email, form!.password)
      .then((res) => {
        dispatch(updateUser(res.user))
        navigation.navigate('FindCoffee')
      })
      .catch(e => {
        console.error(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleSignUp = () => {
    handleError(form);
    setLoading(true)
    auth().createUserWithEmailAndPassword(form!.email, form!.password)
      .then((res) => {
        dispatch(updateUser(res.user))
        console.log(res)
      })
      .catch(e => {
        console.error(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleError = (form: AuthFormValues) => {
    if (form.email === '' || form.password === '') {
      Alert.alert('メールアドレスを入力してください')
      return
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text>メールアドレス</Text>
          <TextInput
            onChangeText={value => setForm({...form, email: value})}
            value={form.email}
            placeholder='メールアドレス'
          />
        </View>
        <View>
          <Text>パスワード</Text>
          <TextInput
            onChangeText={value => setForm({...form, password: value})}
            value={form.password}
            placeholder='パスワード'
          />
        </View>
        <View>
          <Text>サインアップ</Text>
          <Button
            title="サインアップ"
            onPress={handleSignUp}
          />
        </View>
        <View>
          <Text>サインイン</Text>
          <Button
            title="サインイン"
            onPress={handleSignIn}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {},

})
