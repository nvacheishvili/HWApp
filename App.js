import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'red', // sets the background color of the View container to red
          margin: 10, // sets the margin around the View component to 10 on all sides
          marginTop: 5, // sets the margin on the top side of the View component to 5 -- disable this for marginVertical to take effect
          marginLeft: 100, // sets the margin on the left side of the View component to 100 -- disable this for marginHorizontal to take effect
          marginRight: 100, // sets the margin on the right side of the View component to 100 -- disable this for marginHorizontal to take effect
          marginBottom: 100, // sets the margin on the bottom side of the View component to 100 -- disable this for marginVertical to take effect
          marginVertical: 50, // sets the vertical margin (top and bottom) of the View component to 50
          marginHorizontal: 50, // sets the horizontal margin (left and right) of the View component to 50
        }}>
        <Text>Hello World!</Text>
      </View>
      <View style={{backgroundColor: 'red'}}>
        <Text>Hello World 2!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
