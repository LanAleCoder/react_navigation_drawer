import {StyleSheet} from 'react-native';
import theme from '../../theme';

const stylesTitle = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  text: {
    color: theme.colors.TEXT_COLOR,
    fontFamily: 'ProductSans-Medium',
    fontSize: theme.fonts.HEADS,
  },
});

export default stylesTitle;
