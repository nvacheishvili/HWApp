import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{position: 'relative', backgroundColor: 'green'}}>
        <View
          style={{
            backgroundColor: 'yellow',
            margin: 10,
            marginTop: 5,
            marginLeft: 100,
            marginRight: 100,
            marginBottom: 100,
            marginVertical: 50,
            marginHorizontal: 50,
            padding: 10,
            paddingTop: 100,
            paddingLeft: 100,
            paddingRight: 10,
            paddingBottom: 100,
            paddingVertical: 50,
            paddingHorizontal: 50,
            position: 'relative',
            zIndex: 1,
          }}>
          <Text>Hello World!</Text>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            position: 'absolute',
            top: 10,
            left: 5,
            right: 0,
            bottom: 10,
            zIndex: 2,
          }}>
          <Text>Hello World 2!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
