import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  myproductcardname: {
    width: Dimensions.get('screen').width / 2,
    alignItems: 'flex-start',
    margin: 8,
    padding: 10,
  },
  myproductcardprice: {
    width: Dimensions.get('screen').width / 2,
    alignItems: 'flex-end',
    margin: 8,
    padding: 10,
  },
});

export default styles;
