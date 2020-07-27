import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {User} from '../firebase/user/user.http.service';
import {Button, Divider, Headline, Paragraph, TextInput} from 'react-native-paper';

type ProfileCardProps = {
  profileImgUri?: string
  onUpdate: (form: User) => Promise<void>
  displayName: string | null
  description: string | null
  profileForm: User,
}

const ProfileCard = ({profileImgUri, onUpdate, displayName, description, profileForm}: ProfileCardProps) => {
  const [editing, setEdit] = React.useState(false)
  const [form, setForm] = React.useState<User>(profileForm)

  const handleUpdate = () => {
    onUpdate(form)
      .finally(() => {
        setTimeout(() => {
          setEdit(false)
        }, 300)
      })
  }

  return (
    !editing ? (
      <View style={styles.card}>
        <View style={styles.header}>
          <View>
            <Image
              source={{uri: profileImgUri ? profileImgUri : 'https://placeimg.com/78/78/people'}}
              style={styles.avatar}
              resizeMethod='resize'
            />
          </View>
          <View style={styles.texts}>
            <Headline>{displayName ? displayName : 'アカウント名を入力してみましょう'}</Headline>
            <Paragraph>{description ? description : '自己紹介文を入力してみましょう'}</Paragraph>
          </View>
        </View>
        <View style={styles.action}>
          <Button onPress={() => setEdit(true)}>プロフィールを編集</Button>
        </View>
        <Divider/>
      </View>
    ) : (
      <View style={styles.card}>
        <View style={styles.header}>
          <View>
            <Image
              source={{uri: profileImgUri ? profileImgUri : 'https://placeimg.com/78/78/people'}}
              style={styles.avatar}
              resizeMethod='resize'
            />
          </View>
          <View style={styles.texts}>
            <TextInput
              style={styles.input}
              onChangeText={value => setForm({...form, displayName: value})}
              value={form.displayName as string}
              placeholder='名前'
            />
            <TextInput
              style={[styles.input, styles.inputDescription]}
              onChangeText={value => setForm({...form, description: value})}
              value={form.description as string}
              placeholder='自己紹介'
            />
          </View>
        </View>
        <View style={styles.buttonGroup}>
          <Button
            mode={'contained'}
            onPress={handleUpdate}>プロフィールを編集</Button>
          <Button
            style={styles.button}
            mode={'outlined'}
            onPress={() => setEdit(false)}>キャンセル</Button>
        </View>
      </View>
    )

  )
}

export default ProfileCard;

const styles = StyleSheet.create({
  card: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16
  },
  texts: {
    marginLeft: 16,
  },
  avatar: {
    width: 78,
    height: 78,
    borderRadius: 50,
  },
  action: {},
  displayName: {
    fontSize: 16
  },
  description: {
    marginTop: 8,
    fontSize: 14
  },
  input: {
    height: 32,
    width: 230
  },
  inputDescription: {
    marginTop: 4
  },
  buttonGroup: {
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'left',
    padding: 8,
    paddingBottom: 16
  },
  button: {
    marginLeft: 8
  }
})
