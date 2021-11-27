import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './Button.styles';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
