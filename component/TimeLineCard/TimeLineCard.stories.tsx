import React from 'react';
import {storiesOf} from '@storybook/react-native';
import TimeLineCard from '../TimeLineCard';

const now = () => {
  return new Date()
}

storiesOf('TimeLineCard', module)
  .add('test', () => (
    <TimeLineCard
      userThumbnailUri={'https://placeimg.com/36/36/people'}
      userName={'shotaCoffee'}
      thumbnail={'https://placeimg.com/414/414/animals'}
      memo={'ここにメモが入ります、いいでしょ？'}
      postedAt={now()}
      originName={'ハウスブレンド'}
      storeName={'お店の名前'}
      roasterName={'ロースターの名前'}
      productName={'商品の名前です'}
    />
  ))
