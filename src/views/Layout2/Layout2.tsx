import React from 'react';
import {View} from 'react-native';
import Layout2Styles from './Layout2.styles';
import Title from '../../components/Title';
import Btn from '../../components/button';

const Layout2 = ({navigation}) => {
  return (
    <View style={Layout2Styles.container}>
      <Title title="Esta es la vista numero 2" />
      <Btn
        text="Este boton abre el drawer"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

export default Layout2;
