import {Alert, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProfileCard from '../component/ProfileCard';
import {putUser, readUser, User} from '../firebase/user/user.http.service';
import {getMyTweets} from '../firebase/tweet/tweet.http.service';
import {updateUser} from '../store/actions/user';
import TimeLineCard from '../component/TimeLineCard';
import {RootState} from '../store';

const MyCoffeesScreen = () => {
  const user = useSelector<RootState>(state => state.user);
  const dispatch = useDispatch();
  const [myTweets, setMyTweets] = React.useState<any>([]);
  const [isFetching, setIsFetching] = React.useState(false)

  React.useEffect(() => {
    const fetchMyTweets = async () => {
      try {
        setMyTweets([])
        setIsFetching(true)
        await getMyTweets(10, user.user.uid)
          .then(res => {
            const data: any = Object.values(res.val());
            setMyTweets((myTweets: any) => myTweets.concat(data))
            setIsFetching(false)
          })
      } catch (e) {
        console.log(e)
        setMyTweets([])
        setIsFetching(false)
      }
    };

    fetchMyTweets();
  }, [])

  const form: User = {
    uid: user.user.uid,
    displayName: user.user.displayName,
    email: user.user.email,
    photoURL: '',
    description: user.user.description
  }

  const onUpdateProfile = async (formData: User) => {
    const updateUserData: User = {
      uid: user.user.uid,
      displayName: formData.displayName,
      email: user.user.email,
      photoURL: '',
      description: formData.description
    };
    await putUser(updateUserData)
      .then(() => {
        Alert.alert('更新に成功しました')
      })
    await readUser({description: null, displayName: null, email: null, photoURL: null, uid: user.user.uid,})
      .then(res => {
        dispatch(updateUser(res.val()))
      })
  }

  const now = new Date();

  return (
    <FlatList
      ListHeaderComponent={
        <ProfileCard
          profileForm={form}
          description={form.description}
          displayName={form.displayName}
          onUpdate={onUpdateProfile}
          profileImgUri={undefined}/>
      }
      style={styles.myTweets}
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
  )
}

export default MyCoffeesScreen;

const styles = StyleSheet.create({
  myTweets: {}
})
