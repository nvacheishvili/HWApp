import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      // Set the style of the View to have a flex of 1 and column direction
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alinItems: 'baseline',
        // Possible values for flexDirection are 'row', 'row-reverse', 'column', and 'column-reverse'
        // Flex direction determines the primary axis of the layout, either horizontal (row) or vertical (column)
        // If 'row', items are positioned horizontally with the main axis running from left to right
        // If 'column', items are positioned vertically with the main axis running from top to bottom
        // If 'row-reverse', items are positioned horizontally with the main axis running from right to left
        // If 'column-reverse', items are positioned vertically with the main axis running from bottom to top
      }}>
      {/* Each child View component will be placed below the previous one because flexDirection is set to 'column' */}
      <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
      <View style={{backgroundColor: 'green', width: 50, height: 50}} />
      <View style={{backgroundColor: 'black', width: 50, height: 50}} />
      {/* justifyContent determines the alignment of items along the main axis */}
      {/* Possible values for justifyContent are 'flex-start', 'flex-end', 'center', 'space-between', and 'space-around' */}
      {/* If 'flex-start', items are aligned at the beginning of the main axis */}
      {/* If 'flex-end', items are aligned at the end of the main axis */}
      {/* If 'center', items are centered along the main axis */}
      {/* If 'space-between', items are evenly distributed along the main axis with equal space between them */}
      {/* If 'space-around', items are evenly distributed along the main axis with equal space around them */}
      {/* alignItems determines the alignment of items along the cross axis */}
      {/* Possible values for alignItems are 'flex-start', 'flex-end', 'center', 'stretch', 'baseline' */}
      {/* If 'flex-start', items are aligned at the beginning of the cross axis */}
      {/* If 'flex-end', items are aligned at the end of the cross axis */}
      {/* If 'center', items are centered along the cross axis */}
      {/* If 'stretch', items are stretched to fill the container along the cross axis */}
      {/* If 'baseline', items are aligned at the baseline of their text */}
    </View>
  );
};

export default App;
