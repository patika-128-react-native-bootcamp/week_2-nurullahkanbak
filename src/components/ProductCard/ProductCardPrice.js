import React from 'react';
import {Text, View} from 'react-native';
import styles from './ProductCard.styles';

function MyProductCardPrice() {
  return (
    <View style={styles.myproductcardprice}>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>Sen</Text>
    </View>
  );
}

export default MyProductCardPrice;
