import {Alert, SafeAreaView} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProfileCard, {ProfileForm} from '../component/ProfileCard';
import {readUser, putUser} from '../firebase/user/user.http.service';
import {updateUser} from '../store/actions/user';

const MyCoffeesScreen = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  // const hoge = React.useCallback(() => {
  //   console.log(user.user)
  // }, [])
  //
  // React.useEffect(() => {
  //   hoge()
  // }, [])

  const form: ProfileForm = {
    userId: user.user.uid,
    displayName: user.user.displayName,
    email: user.user.email,
    description: user.user.description
  } as ProfileForm

  const onUpdateProfile = (formData: ProfileForm) => {
    console.info(user.user.uid)
    putUser(user.user.uid, formData.displayName, user.user.email, formData.description)
      .then(() => {
        Alert.alert('更新に成功しました')
        readUser(user.user.uid).then(res => {
          dispatch(updateUser(res.val()))
        })
      })
  }

  return (
    <SafeAreaView>
      <ProfileCard
        profileForm={form}
        description={form.description}
        displayName={form.displayName}
        onUpdate={onUpdateProfile}
        profileImgUri={undefined}/>
      {/*TODO 自分の投稿したデータを広げる*/}
    </SafeAreaView>
  )
}

export default MyCoffeesScreen;
