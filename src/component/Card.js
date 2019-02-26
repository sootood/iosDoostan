import React from 'react';
import { View,Text } from 'react-native';

const Card = (Props) => {
  const { viewStyle } = styles;
  return (
    <View style={viewStyle}>
        <Text>{Props.title}</Text>
    {Props.children}
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
