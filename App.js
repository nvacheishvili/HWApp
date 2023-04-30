import React from 'react';
import {SafeAreaView} from 'react-native';
import MyText from './components/MyText/MyText';
const App = () => {
  return (
    <SafeAreaView>
      <MyText name={'Nata'} />
    </SafeAreaView>
  );
};

export default App;
