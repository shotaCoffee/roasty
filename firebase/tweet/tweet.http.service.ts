import {database} from '../firebase';

export type CoffeeForm = {
  postedAt: Date,
  storeName: string,
  originName: string,
  bitterTaste: string,
  acidityTaste: string
}

export type TweetUser = {
  displayName: string,
  uid: string,
}

export type Tweet = {
  imageId: string
  storeName: string
  roasterName: string
  originName: string
  productName: string
  comment: string
  bitterTaste: string
  acidityTaste: string
  postedAt: Date
}

export type PostedTweet = {
  user: TweetUser
  tweet: Tweet
}

export const createTweet = ({user, tweet}: PostedTweet) => {
  // ${user.uid}
  const postedValue = Object.assign(user, tweet)
  return database.ref(`tweets/`)
    .push(postedValue)
}

export const getAnonymousTweets = (limit: number = 10) => {
  return database.ref(`tweets/`)
    .limitToLast(limit)
    .once('value')
}

export const getMyTweets = (limit: number = 10, uid: string) => {
  return database.ref(`tweets/`)
    .orderByChild('uid')
    .equalTo(uid)
    .once('value')
}
