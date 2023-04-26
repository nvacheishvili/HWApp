import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          color: '#ff0000',
          fontFamily: 'Arial',
          fontSize: 20,
          fontStyle: 'italic',
          fontWeight: '100',
          lineHeight: 70,
          textAlign: 'right',
        }}>
        Hello World!
      </Text>
    </SafeAreaView>
  );
};

export default App;
