import React from 'react';
import {Text} from 'react-native';
import style from './style';
const MyText = () => {
  return (
    <Text style={[style.text, style.text1, {color: 'green'}]}>
      Hello, React Native World!
    </Text>
  );
};

export default MyText;
