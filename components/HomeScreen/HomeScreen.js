import React, {useContext} from 'react';
import {View, Text} from 'react-native';

// Import the ThemeContext from the context folder
import {ThemeContext} from '../../contexts/ThemeContext';

// Define the HomeScreen component
const HomeScreen = () => {
  // Use the useContext hook to access the value of isDarkMode from the ThemeContext
  const isDarkMode = useContext(ThemeContext);

  // Render a View component with a background color that depends on the value of isDarkMode
  // Render a Text component with a color that depends on the value of isDarkMode
  return (
    <View style={{backgroundColor: isDarkMode ? '#222222' : '#ffffff'}}>
      <Text style={{color: isDarkMode ? '#ffffff' : '#000000'}}>
        Welcome to my application
      </Text>
    </View>
  );
};

// Export the HomeScreen component as the default export of the module
export default HomeScreen;
