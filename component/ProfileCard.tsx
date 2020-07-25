import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {User} from '../firebase/user/user.http.service';

type ProfileCardProps = {
  profileImgUri?: string
  onUpdate: (form: User) => void
  displayName?: string
  description?: string
  profileForm: User
}

const ProfileCard = ({profileImgUri, onUpdate, displayName, description, profileForm}: ProfileCardProps) => {
  const [editing, setEdit] = React.useState(false)
  const [form, setForm] = React.useState<User>(profileForm)

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
          <Button onPress={() => setEdit(true)} title={'プロフィールを編集'}/>
        </View>
        <View style={styles.main}>
          <Text style={styles.displayName}>{displayName ? displayName : 'アカウント名を入力してみましょう'}</Text>
          <Text style={styles.description}>{description ? description : '自己紹介文を入力してみましょう'}</Text>
        </View>
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
          <View style={styles.buttonGroup}>
            <Button onPress={() => onUpdate(form)} title={'プロフィールを編集'}/>
            <Button onPress={() => setEdit(false)} title={'キャンセル'}/>
          </View>
        </View>
        <View style={styles.main}>
          <TextInput
            style={styles.input}
            onChangeText={value => setForm({...form, displayName: value})}
            value={form.displayName as string}
            placeholder='名前'
          />
          <TextInput
            style={styles.input}
            onChangeText={value => setForm({...form, description: value})}
            value={form.description as string}
            placeholder='自己紹介'
          />
        </View>
      </View>
    )

  )
}

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    marginTop: 32
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  avatar: {
    width: 78,
    height: 78,
    borderRadius: 50,
  },
  main: {
    marginTop: 8,
    padding: 16
  },
  displayName: {
    fontSize: 16
  },
  description: {
    marginTop: 8,
    fontSize: 14
  },
  input: {},
  buttonGroup: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    textAlign: 'left'
  }
})
