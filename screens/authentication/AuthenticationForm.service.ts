import {Alert} from 'react-native';

export type AuthFormValues = {
  email: string
  password: string
}

export const handleError = (form: AuthFormValues) => {
  if (form.email === '' || form.password === '') {
    Alert.alert('メールアドレスを入力してください')
    return
  }
}
