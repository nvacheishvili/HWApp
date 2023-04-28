import React from 'react';
import {Text} from 'react-native';
import style from './style';
const MyText = () => {
  const handleTextClick = () => {
    alert('The text has been clicked');
  };

  return (
    <Text
      style={[style.text, style.text1, {color: 'green'}]}
      onPress={() => handleTextClick()}>
      Hello, React Native World!
    </Text>
  );
};

export default MyText;
