import React from 'react';
import {Text, View} from 'react-native';
import styles from './ProductCard.styles';
import MyInputText from '../Input/InputText';

function MyProductCardName() {
  return (
    <View style={styles.myproductcardname}>
      <Text style={{justifyContent: 'center'}}>Ben</Text>
    </View>
  );
}

export default MyProductCardName;
