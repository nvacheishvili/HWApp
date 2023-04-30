import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  // Button,
  TouchableOpacity,
  Switch,
  Text,
  View,
} from 'react-native';

const App = () => {
  // Declare state variables to hold the email and password values entered by the user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Declare state variables to hold the value of keeping user logged in or not
  const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(true);
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          // Set the value of the TextInput to the email state variable
          value={email}
          // Set keyboardType to 'email-address' to display the email keyboard layout
          keyboardType={'email-address'}
          // Set the style of the TextInput to have a border, padding, and rounded corners
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          // Set the placeholder text to prompt the user to enter their email
          placeholder={'Please enter your email here'}
          // Set the onChangeText function to update the email state variable with the new value typed by the user
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <TextInput
          // Set the value of the TextInput to the password state variable
          value={password}
          // Set secureTextEntry to true to hide the typed text as bullets (for passwords)
          secureTextEntry={true}
          // Set the style of the TextInput to have a border, padding, and rounded corners
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          // Set the placeholder text to prompt the user to enter their password
          placeholder={'Please enter your password here'}
          // Set the onChangeText function to update the password state variable with the new value typed by the user
          onChangeText={value => {
            setPassword(value);
          }}
        />
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          {/*-- Switch component to decide whether user wants to stay logged in or not --*/}
          <Switch
            value={shouldKeepLoggedIn} //Current value of the switch (true - on, false - off)
            onValueChange={value => setShouldKeepLoggedIn(value)} //on switch value change, reset the state variable as well
          />
          <Text>Keep me logged in</Text>
        </View>
        {/* -- Background Color does not work with button component, therefore we're going to use Pressable
            <Button
              title={'Submit'}
              color={'red'}
              style={{backgroundColor: 'black'}}
            />
        */}
        <TouchableOpacity
          // Set the style of the Pressable to have a black background color
          // Set opacity to 0.5 if either email or password is missing or the password is less than 8 characters
          style={[
            {backgroundColor: 'black'},
            (email.length === 0 || password.length < 8) && {opacity: 0.5},
          ]}
          // Disable the Pressable if either email or password is missing or the password is less than 8 characters
          disabled={email.length === 0 || password.length < 8}
          // Set the onPress function to log the email, password and keep me logged in values to the console
          onPress={() => {
            console.log('clicked');
            console.log(email, password, shouldKeepLoggedIn);
          }}>
          <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
