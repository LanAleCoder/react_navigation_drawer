import React from 'react';
import {View, Button} from 'react-native';
import buttonStyles from './button.styles';
import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';

type Props = {
  text: String;
  onPress(): void;
};

const Btn = ({text, onPress}: Props) => {
  return (
    <View style={buttonStyles.buttonContainer}>
      <AwesomeButtonCartman onPress={onPress} type="primary">
        {text}
      </AwesomeButtonCartman>
    </View>
  );
};

export default Btn;
