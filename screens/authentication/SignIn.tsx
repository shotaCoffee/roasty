import {Alert, Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import React from 'react';
import {auth} from 'firebase';
import {updateUser} from '../../store/actions/user';
import {AuthFormValues, handleError} from './AuthenticationForm.service';
import {useDispatch} from 'react-redux';
import {AuthenticationStyles as styles} from './Authenticate.style';
const SignInScreen = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false)
  const [form, setForm] = React.useState<AuthFormValues>({
    email: '',
    password: ''
  })

  const handleSignIn = () => {
    handleError(form);
    setLoading(true)
    auth().signInWithEmailAndPassword(form!.email, form!.password)
      .then((res) => {
        dispatch(updateUser(res.user))
      })
      .catch(e => {
        Alert.alert('ログインに失敗しました')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <View style={styles.formItem}>
            <MaterialCommunityIcons name="email-outline" size={24} color="black"/>
            <TextInput
              style={styles.input}
              onChangeText={value => setForm({...form, email: value})}
              value={form.email}
              placeholder='メールアドレス'
              autoCompleteType='email'
            />
          </View>
          <View style={styles.formItem}>
            <MaterialCommunityIcons name="lock-outline" size={24} color="black"/>
            <TextInput
              style={styles.input}
              onChangeText={value => setForm({...form, password: value})}
              value={form.password}
              placeholder='パスワード'
              autoCompleteType='password'
            />
          </View>
        </View>
        <View style={styles.buttonWrap}>
          <Button
            title="サインイン"
            onPress={handleSignIn}
          />
        </View>
        <View style={styles.description}>
          <Text>アカウントをがない場合は</Text>
          <Text style={styles.link}
                onPress={() => {
                  navigation.navigate('SignUp')
                }}>こちら</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default SignInScreen

