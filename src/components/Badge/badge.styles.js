import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  BadgeContainerStyle: {
    backgroundColor: '#cfd8dc',
    paddingVertical: 8,
    borderRadius: 5,
    width: Dimensions.get('screen').width / 3.5,
    margin: 8,
    padding: 5,
  },
  BadgeTextStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  BadgeAlignment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
});

export default styles;
