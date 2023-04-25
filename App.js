import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          borderWidth: 1, // Sets the width of all four borders of the container to 1
          borderTopWidth: 5, // Sets the width of the top border of the container to 5
          borderBottomWidth: 10, // Sets the width of the bottom border of the container to 10
          borderLeftWidth: 3, // Sets the width of the left border of the container to 3
          borderRightWidth: 20, // Sets the width of the right border of the container to 20
          borderColor: '#15099d', // Sets the color of all four borders to a shade of blue
          borderRadius: 10, // Sets the radius of all four border corners to 10 , making the border rounded
          borderTopLeftRadius: 20, // Sets the radius of the top left border corner to 20
          borderBottomLeftRadius: 20, // Sets the radius of the bottom left border corner to 20
          borderTopRightRadius: 30, // Sets the radius of the top right border corner to 30
          borderBottomRightRadius: 30, // Sets the radius of the bottom right border corner to 30
        }}>
        <Text>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
