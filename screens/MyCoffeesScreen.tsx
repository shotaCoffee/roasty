import {SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProfileCard, {ProfileForm} from '../component/ProfileCard';

const MyCoffeesScreen = () => {
  const user = useSelector(state => state.user);
  const form: ProfileForm = {
    displayName: '',
    description: ''
  } as ProfileForm

  const onUpdateProfile = (form: ProfileForm) => {
    console.log(form)
  }

  return (
    <SafeAreaView>
      <ProfileCard
        profileForm={form}
        description={undefined}
        displayName={undefined}
        onUpdate={onUpdateProfile}
        profileImgUri={undefined}/>
      {/*TODO 自分の投稿したデータを広げる*/}
    </SafeAreaView>
  )
}

export default MyCoffeesScreen;
