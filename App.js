import React, {useRef} from 'react';
import {SafeAreaView, Text, ScrollView, Button} from 'react-native';

const App = () => {
  // Create an array with 1000 elements, all initialized to 0.
  let array = Array(1000).fill(0);

  // Create a ref object using the useRef hook and initialize it to null.
  // This ref will be used to reference the ScrollView component.
  const scrollViewRef = useRef(null);

  // Define a click handler function that will be called when the user clicks the button.
  const handleClick = () => {
    // Call the scrollTo method on the scrollViewRef.current object to scroll the ScrollView to the top.
    scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  };

  // Render the SafeAreaView component and its children.
  return (
    <SafeAreaView>
      {/* Render the ScrollView component and pass the scrollViewRef object as a ref prop. */}
      <ScrollView ref={scrollViewRef}>
        {/* Render the Text components for each element in the array. */}
        {array.map((value, index) => (
          <Text key={index}>Hello World {index}!</Text>
        ))}
      </ScrollView>
      {/* Render the Button component and pass the handleClick function as an onPress prop. */}
      <Button onPress={handleClick} title={'Scroll to top'} />
    </SafeAreaView>
  );
};

export default App;
