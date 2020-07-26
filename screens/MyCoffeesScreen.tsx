import {Alert, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProfileCard from '../component/ProfileCard';
import {readUser, putUser, User} from '../firebase/user/user.http.service';
import {getMyTweets} from '../firebase/tweet/tweet.http.service';
import {updateUser} from '../store/actions/user';
import TimeLineCard from '../component/TimeLineCard';

const MyCoffeesScreen = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [myTweets, setMyTweets] = React.useState<any>([]);

  const fetchMyTweets = React.useCallback(() => {
    getMyTweets(10, user.user.uid).then(res => {
      const data: any = Object.values(res.val());
      setMyTweets(myTweets.concat(data))
      console.log('data', data , 'myTweets', myTweets)
    })
  }, [])

  React.useEffect(() => {
    fetchMyTweets()
  }, [])

  const form: User = {
    uid: user.user.uid,
    displayName: user.user.displayName,
    email: user.user.email,
    photoURL: '',
    description: user.user.description
  }

  const onUpdateProfile = (formData: User) => {
    const updateUserData: User = {
      uid: user.user.uid,
      displayName: formData.displayName,
      email: user.user.email,
      photoURL: '',
      description: formData.description
    };
    putUser(updateUserData)
      .then(() => {
        Alert.alert('更新に成功しました')
        readUser(user.user.uid).then(res => {
          dispatch(updateUser(res.val()))
        })
      })
  }

  const now = new Date();

  return (
    <SafeAreaView>
      <ProfileCard
        profileForm={form}
        description={form.description}
        displayName={form.displayName}
        onUpdate={onUpdateProfile}
        profileImgUri={undefined}/>
      <FlatList
        data={myTweets}
        keyExtractor={(((item, index) => index.toString()))}
        renderItem={(rowData) =>
          <TimeLineCard
            userThumbnailUri={'https://placeimg.com/36/36/people'}
            userName={user.user.displayName}
            thumbnail={'https://placeimg.com/414/414/animals'}
            memo={rowData.item.comment}
            postedAt={now}
            originName={rowData.item.originName}
          />
        }
      />
    </SafeAreaView>
  )
}

export default MyCoffeesScreen;
