import React, {useState} from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';

// Import the ThemeContext from the context folder
import {ThemeContext} from './contexts/ThemeContext';

// Import the HomeScreen component from the components folder
import HomeScreen from './components/HomeScreen/HomeScreen';

// Define the App component
const App = () => {
  // Use the useState hook to create a new state variable called isDarkMode, which starts off as false
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Define a function called toggleTheme that toggles the value of isDarkMode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Render the App component
  return (
    // Render a ThemeContext.Provider component, which provides the value of isDarkMode to any child components that consume the ThemeContext
    <ThemeContext.Provider value={isDarkMode}>
      {/* Render a SafeAreaView component to ensure content is safe from notches and other device variations */}
      <SafeAreaView>
        {/* Render a View component with a background color that depends on the value of isDarkMode */}
        <View style={{backgroundColor: isDarkMode ? '#222222' : '#ffffff'}}>
          {/* Render a Text component that says "Hello World!" */}
          <Text>Hello World!</Text>
          {/* Render a Button component that toggles the value of isDarkMode when pressed */}
          <Button title={'Switch Mode'} onPress={toggleTheme} />
        </View>
        {/* Render the HomeScreen component */}
        <HomeScreen />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

// Export the App component as the default export of the module.
export default App;
