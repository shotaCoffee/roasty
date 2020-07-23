import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import React from 'react';

export type TimeLineCardProps = {
  userThumbnailUri: string;
  userName: string;
  thumbnail: string;
  storeName?: string;
  roasterName?: string;
  productName?: string;
  memo: string;
  postedAt: Date;
  originName: string;
}

const TimeLineCard = (
  {
    userThumbnailUri,
    userName,
    thumbnail,
    storeName,
    roasterName,
    productName,
    memo,
    postedAt,
    originName
  }: TimeLineCardProps) => {

  const [showMemo, toggleMemo] = React.useState(false);

  const handlePress = () => {
    toggleMemo(!showMemo)
  }

  const formatDate = (dateTime: Date) => {
    return dateTime.getFullYear() + '/' + (dateTime.getMonth() + 1) + '/' + dateTime.getDate()
  }

  return (
    <View style={styles.card}>
      <View style={styles.userMeta}>
        <View style={styles.user}>
          <Text>
            <Image
              style={styles.avatar}
              source={{uri: userThumbnailUri}}
            />
          </Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
        <Text>{formatDate(postedAt)}</Text>
      </View>
      <View>
        <Image source={{uri: thumbnail}} style={{width: 414, height: 414}}/>
      </View>
      <View style={styles.cardMeta}>
        <View style={styles.contentMeta}>
          <FontAwesome5 name="store-alt" size={16} color="#666"/>
          <Text style={styles.contentText}>{storeName} / {roasterName}</Text>
        </View>
        <View style={styles.contentMeta}>
          <FontAwesome5 style={styles.origin} name="map-marker-alt" size={16} color="#666"/>
          <Text style={[styles.contentText, styles.originText]}>{originName}</Text>
        </View>
        <View style={styles.contentMeta}>
          <AntDesign style={styles.product} name="pushpin" size={16} color="#666"/>
          <Text style={styles.contentText}>{productName}</Text>
        </View>
      </View>
      <View style={styles.comment}>
        <Button title='メモを見る' onPress={handlePress}/>
        {
          showMemo &&
          <View>
            <Text>{memo}</Text>
          </View>
        }
      </View>
    </View>
  )
}

export default TimeLineCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF'
  },
  userMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    marginLeft: 8,
    paddingBottom: 2
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 50
  },
  cardMeta: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 8
  },
  contentMeta: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  origin: {
    paddingLeft: 4
  },
  originText: {
    paddingLeft: 2
  },
  product: {
    paddingLeft: 1
  },
  contentText: {
    marginLeft: 4
  },
  comment: {},
})
