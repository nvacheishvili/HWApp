import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Item from './components/Item/Item';
const App = () => {
  return (
    <SafeAreaView>
      <Item name={'Table'} price={20} />
      <Item name={'Chair'} price={100} />
      <Item name={'Desk'} price={200} />
    </SafeAreaView>
  );
};

export default App;
