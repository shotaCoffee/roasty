import {Alert, Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import React from 'react';
import {auth} from 'firebase';
import {updateUser} from '../../store/actions/user';
import {useDispatch} from 'react-redux';
import {AuthFormValues} from './AuthenticationForm.service';
import {AuthenticationStyles as styles} from './Authenticate.style';

const SignUpScreen = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [form, setForm] = React.useState<AuthFormValues>({
    email: '',
    password: ''
  })
  const [loading, setLoading] = React.useState(false)

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
          <View style={styles.formItem}>
            <MaterialCommunityIcons style={styles.formIcon} name="email-outline" size={24} color="black"/>
            <TextInput
              style={styles.input}
              onChangeText={value => setForm({...form, email: value})}
              value={form.email}
              placeholder='メールアドレス'
              autoCompleteType='email'
            />
          </View>
          <View style={styles.formItem}>
            <MaterialCommunityIcons style={styles.formIcon} name="lock-outline" size={24} color="black"/>
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
            title="サインアップ"
            onPress={handleSignUp}
          />
        </View>
        <View style={styles.description}>
          <Text>アカウントをお持ちの場合は</Text>
          <Text style={styles.link} onPress={() => {navigation.navigate('SignIn')}}>こちら</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen;
