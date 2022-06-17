import React from 'react';
import {View} from 'react-native';
import Layout1Styles from './Layout1.styles';
import Title from '../../components/Title';

const Layout1 = () => {
  return (
    <View style={Layout1Styles.container}>
      <Title title="Esta es la vista numero 1" />
    </View>
  );
};

export default Layout1;
