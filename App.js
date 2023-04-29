import React, {Component} from 'react';

// Import the SafeAreaView and Text components from the React Native library
import {SafeAreaView, Text} from 'react-native';

// Define a new class called "App" that extends the Component class from React
class App extends Component {
  // Define a constructor function that takes "props" as its argument
  constructor(props) {
    // Call the constructor of the parent class using the "super" keyword
    super(props);
    // Initialize the state object with an empty object
    this.state = {};
  }

  // Define a "render" method that returns a JSX element
  render() {
    return (
      // Render a SafeAreaView component that contains a Text component with the text "Hello World!"
      <SafeAreaView>
        <Text onPress={() => this.setState({name: 'Nata'})}>
          Hello, {this.state?.name}!
        </Text>
      </SafeAreaView>
    );
  }
}

export default App;
