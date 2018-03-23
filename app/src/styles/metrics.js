import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
  height: height > width ? height : width,
  width: width < height ? width : height,
};
