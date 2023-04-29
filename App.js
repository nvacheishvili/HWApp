import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import useToggle from './customHooks/useToggle'; // Import the custom hook

const App = () => {
  // Call the custom hook and get the current value of the boolean state and the toggle function to update the state
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <SafeAreaView>
      <Text>{isOn ? 'ON' : 'OFF'}</Text>{' '}
      {/* Display the current value of the boolean state */}
      <Button title={'Toggle'} onPress={toggleIsOn} />{' '}
      {/* Render a button that calls the toggle function when pressed */}
    </SafeAreaView>
  );
};

export default App;
