import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

const App = () => {
  const [text, setText] = useState('Hello, World!');
  return (
    <SafeAreaView>
      <Text
        onPress={() => setText('Hello World, I learned how to change state!')}>
        {text}
      </Text>
    </SafeAreaView>
  );
};

export default App;
