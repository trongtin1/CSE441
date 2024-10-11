import React from 'react';
import {ScrollView} from 'react-native';
import style from './style';
import Data from './Data';
import Square from './Square';

export default function App() {
  return (
    <ScrollView style={style.container}>
      {Data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
}
