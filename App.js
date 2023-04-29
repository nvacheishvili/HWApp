import React, {Component} from 'react';

// Import the SafeAreaView and Text components from the React Native library
import {SafeAreaView, Text} from 'react-native';

// Define a new class called "App" that extends the Component class from React
class App extends Component {
  // Define a constructor function that takes "props" as its argument
  constructor(props) {
    // Call the constructor of the parent class using the "super" keyword
    super(props);
  }

  // Define a "render" method that returns a JSX element
  render() {
    return (
      // Render a SafeAreaView component that contains a Text component with the text "Hello World!"
      <SafeAreaView>
        <Text>Hello World!</Text>
      </SafeAreaView>
    );
  }
}

export default App;
