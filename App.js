import React, {useState} from 'react';
import {SafeAreaView, Image} from 'react-native';

const App = () => {
  // Declare a state variable called imageSource and a function to update it called setImageSource
  //Give it some example of image that does not exist so that we can use the onError function later to reset image source
  const [imageSource, setImageSource] = useState({uri: 'http://example.com'});
  return (
    <SafeAreaView>
      <Image
        // Set the source of the image to the imageSource state variable
        source={imageSource}
        // Set the style of the image to be the full width and height of the parent container with a red background color
        style={{width: '100%', height: '100%', backgroundColor: 'red'}}
        // Set the resize mode of the image to 'center', we've learned about 'cover' and 'stretch' as well
        resizeMode={'center'}
        // If there is an error loading the image, log an error message and set the image source to a local image
        onError={() => {
          console.log('Error has been detected while loading an image');
          setImageSource(require('./assets/images/cake.png'));
        }}
      />
      <Image
        // Set the source of the image to a static URL from an external website
        source={{
          uri: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
        }}
        // Set the width and height of the image to be 100 each
        style={{width: 100, height: 100}}
      />
    </SafeAreaView>
  );
};

export default App;
