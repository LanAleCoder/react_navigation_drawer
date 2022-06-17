import React from 'react';
import {View, Button} from 'react-native';
import Layout3Styles from './Layout3.styles';
import Btn from '../../components/button';

const Layout3 = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Btn title="Este boton abre un drawer" />
    </View>
  );
};

export default Layout3;
