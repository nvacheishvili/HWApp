import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';

const App = () => {
  // Declare state variables to hold the value of each TextInput
  const [textValue, setTextValue] = useState('');
  const [email, setEmail] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        // Set the style of the TextInput to have a border, padding, and rounded corners
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        // Set the value of the TextInput to the textValue state variable
        value={textValue}
        // Set the onChangeText function to update the textValue state variable with the new value typed by the user
        onChangeText={value => setTextValue(value)}
        // Set autoFocus to true to automatically focus on this input when the component is rendered
        autoFocus={true}
        // Set the placeholder text to prompt the user to enter their name
        placeholder={'Please enter your name'}
      />
      <TextInput
        // Set the style of the TextInput to have a border, padding, and rounded corners
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        // Set the value of the TextInput to the email state variable
        value={email}
        // Set the onChangeText function to update the email state variable with the new value typed by the user
        onChangeText={value => setEmail(value)}
        // Set returnKeyType to 'search' to change the return key on the keyboard to say 'Search'
        returnKeyType={'search'}
        // Set keyboardType to 'email-address' to display the email keyboard layout
        keyboardType={'email-address'}
        // Set autoFocus to true to automatically focus on this input when the component is rendered
        autoFocus={true}
        // Set the placeholder text to prompt the user to enter their email
        placeholder={'Please enter your email here'}
      />
      <TextInput
        // Set the style of the TextInput to have a border, padding, and rounded corners
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        // Set the value of the TextInput to the passwordValue state variable
        value={passwordValue}
        // Set the onChangeText function to update the passwordValue state variable with the new value typed by the user
        onChangeText={value => setPasswordValue(value)}
        // Set keyboardType to 'phone-pad' to display the phone number keyboard layout
        keyboardType={'phone-pad'}
        // Set secureTextEntry to true to hide the typed text as bullets (for passwords)
        secureTextEntry={true}
        // Set autoFocus to true to automatically focus on this input when the component is rendered
        autoFocus={true}
        // Set the placeholder text to prompt the user to enter their password
        placeholder={'Please enter your password'}
      />
    </SafeAreaView>
  );
};

export default App;
