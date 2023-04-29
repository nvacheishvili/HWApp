import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

const App = () => {
  const [text, setText] = useState(0);

  useEffect(() => {
    //use effect that runs every time text value changes
    console.log('The text has changed!');
  }, [text]);

  useEffect(() => {
    //use effect that runs every time screen is rendered
    console.log('The component has rendered!');
  }, []);

  return (
    <SafeAreaView>
      {/*on press change the text variable that in turn causes the useEffect to run*/}
      <Text onPress={() => setText(text + 1)}>{text}</Text>
    </SafeAreaView>
  );
};

export default App;
