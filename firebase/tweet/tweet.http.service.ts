import firebase from 'firebase';

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
  storeName: string
  roasterName: string
  originName: string
  productName: string
  comment: string
  bitterTaste: string
  acidityTaste: string
}

export type PostedTweet = {
  user: TweetUser
  tweet: Tweet
}

export const createTweet = ({user, tweet}: PostedTweet) => {
  // ${user.uid}
  const postedValue = Object.assign(user, tweet)
  return firebase.database().ref(`tweets/`)
    .push(postedValue)
}
