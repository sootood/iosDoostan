import React from 'react';
import { View } from 'react-native';

const CustomInput = (Props) => {
  const { viewStyle } = styles;
  return (
    <View style={viewStyle}>
        <Text>{Props.title}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#00b894',
    padding: 10,
    margin: 10
  }

};
export { Card };
