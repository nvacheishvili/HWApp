import {useState} from 'react';

// Define the custom hook function and set an optional initial value for the boolean state
const useToggle = (initialValue = false) => {
  // Call the `useState` hook to create a new state variable called `value` and a function called `setValue` that can be used to update the state
  const [value, setValue] = useState(initialValue);

  // Define a function called `toggle` that toggles the boolean state value
  const toggle = () => {
    // Call `setValue` and pass in the opposite of the current `value` to toggle the state
    setValue(!value);
  };
  return [value, toggle]; // Return an array containing the current `value` of the boolean state and the `toggle` function
};

export default useToggle; // Export the custom hook function
