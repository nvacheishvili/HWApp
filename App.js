import React from 'react';
import {SafeAreaView, ScrollView, Image} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView
        // Set the onScroll function to log a message when scrolling occurs
        onScroll={() => console.log('We are now scrolling')}
        // Set the contentContainerStyle to have a red background color and a fixed height of 600
        contentContainerStyle={{backgroundColor: 'red', height: 600}}
        // Set showsVerticalScrollIndicator to false to hide the vertical scroll indicator
        showsVerticalScrollIndicator={false}
        // Set horizontal to true to allow horizontal scrolling
        horizontal={true}
        // Set showsHorizontalScrollIndicator to false to hide the horizontal scroll indicator
        showsHorizontalScrollIndicator={false}>
        <Image
          // Set the source of the image to a local image
          source={require('./assets/images/cake.png')}
          // Set the height and width of the image to be 500 each
          style={{height: 500, width: 500}}
        />
        <Image
          // Set the source of the image to a local image
          source={require('./assets/images/cake.png')}
          // Set the height and width of the image to be 500 each
          style={{height: 500, width: 500}}
        />
        <Image
          // Set the source of the image to a local image
          source={require('./assets/images/cake.png')}
          // Set the height and width of the image to be 500 each
          style={{height: 500, width: 500}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
