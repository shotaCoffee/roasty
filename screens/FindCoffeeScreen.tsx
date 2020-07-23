import {SafeAreaView, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import TimeLineCard, {TimeLineCardProps} from '../component/TimeLineCard';

const FindCoffeeScreen = () => {
  // const user = useSelector(state => state.user)

  // React.useEffect(() => {
  //   console.log(user.user)
  // }, [])

  return (
    <FlatList
      data={dummyList}
      keyExtractor={((item, index) => index.toString())}
      renderItem={(rowData) =>
        <TimeLineCard
          userThumbnailUri={rowData.item.userThumbnailUri}
          userName={rowData.item.userName}
          thumbnail={rowData.item.thumbnail}
          storeName={rowData.item.storeName}
          roasterName={rowData.item.roasterName}
          productName={rowData.item.productName}
          memo={rowData.item.memo}
          postedAt={now()}
          originName={rowData.item.originName}
        />
      }
    />
  )
}

export default FindCoffeeScreen;

const now = () => {
  return new Date()
}

const dummyList = [
  {
    userThumbnailUri: 'https://placeimg.com/36/36/people',
    userName: 'shotaCoffee',
    thumbnail: 'https://placeimg.com/414/414/animals',
    storeName: 'スターバックスコーヒー',
    roasterName: 'Nozy',
    productName: 'ハウスブレンド',
    memo: 'いつものコーヒーよりちょっといいやつ',
    postedAt: now(),
    originName: 'コスタリカ',
  },
  {
    userThumbnailUri: 'https://placeimg.com/36/36/people',
    userName: 'shotaCoffee',
    thumbnail: 'https://placeimg.com/414/414/nature',
    storeName: 'スターバックスコーヒー',
    roasterName: 'Nozy',
    productName: 'ハウスブレンド',
    memo: 'いつものコーヒーよりちょっといいやつ',
    postedAt: now(),
    originName: 'コスタリカ',
  },
]
