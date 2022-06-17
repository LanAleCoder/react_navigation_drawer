import React from 'react';
import {View, Text} from 'react-native';
import stylesTitle from './title.styles';

const Title = ({title}: {title: String}) => {
  return (
    <View style={stylesTitle.titleContainer}>
      <Text style={stylesTitle.text}>{title}</Text>
    </View>
  );
};

export default Title;
