import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './Input.styles';

function MyInputPrice() {
  const [PriceInputValue, setPriceInput] = useState(0);
  return (
    <View>
      <Text>Price</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPriceInput(text)}
        value={PriceInputValue}
        placeholder="Price"
      />
    </View>
  );
}

export default MyInputPrice;
