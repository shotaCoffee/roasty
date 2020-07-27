import {Button, StyleSheet, Text, View} from 'react-native';
import {AntDesign, FontAwesome5} from '@expo/vector-icons';
import React from 'react';
import {Avatar, Card, Paragraph} from 'react-native-paper';

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
  bitterTaste?: string;
  acidityTaste?: string;
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
    originName,
    bitterTaste,
    acidityTaste
  }: TimeLineCardProps) => {

  const [showMemo, toggleMemo] = React.useState(false);

  const handlePress = () => {
    toggleMemo(!showMemo)
  }

  const formatDate = (dateTime: Date) => {
    return dateTime.getFullYear() + '/' + (dateTime.getMonth() + 1) + '/' + dateTime.getDate()
  }

  return (
    <Card>
      <Card.Title
        title={userName}
        left={() => <Avatar.Image size={36} source={{uri: userThumbnailUri}}/>}
        right={() => <Text>{formatDate(postedAt)}</Text>}
        rightStyle={styles.titleRight}
      />
      <Card.Cover source={{uri: thumbnail}} style={{width: 414, height: 414}}/>
      <Card.Content style={styles.cardMeta}>
        <Card.Content style={[styles.contentMeta, styles.stores]}>
          <FontAwesome5 name="store-alt" size={16} color="#666"/>
          <View>
            <Text style={styles.contentText}>お店：{storeName}</Text>
            <Text style={[styles.contentText, styles.next]}>ロースター：{roasterName}</Text>
          </View>
        </Card.Content>
        <Card.Content style={[styles.contentMeta, styles.child]}>
          <View style={styles.places}>
            <FontAwesome5 style={styles.origin} name="map-marker-alt" size={16} color="#666"/>
            <Text style={[styles.contentText, styles.originText]}>{originName}</Text>
          </View>
          <View style={styles.places}>
            <AntDesign style={styles.product} name="pushpin" size={16} color="#666"/>
            <Text style={styles.contentText}>{productName}</Text>
          </View>
        </Card.Content>
      </Card.Content>
      <Card.Actions style={styles.action}>
        <Button title={showMemo ? '閉じる' : 'メモを見る'} onPress={handlePress}/>
      </Card.Actions>
      {
        showMemo &&
        <Card.Content style={[styles.contentMeta, styles.comment]}>
          <Paragraph>{memo}</Paragraph>
          <Paragraph>苦味：{bitterTaste}</Paragraph>
          <Paragraph>酸味：{acidityTaste}</Paragraph>
        </Card.Content>
      }
    </Card>
  )
}

export default TimeLineCard;

const styles = StyleSheet.create({
  cardMeta: {
    paddingTop: 8
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
  action: {
    flexDirection: 'column',
    alignContent: 'flex-end',
    alignItems: 'flex-end'
  },
  titleRight: {
    paddingRight: 16
  },
  stores: {
    alignItems: 'flex-start',
  },
  places: {
    flexDirection: 'row'
  },
  child: {
    marginTop: 8
  },
  next: {
    marginTop: 4
  },
  comment: {
    paddingLeft: 32,
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
})
