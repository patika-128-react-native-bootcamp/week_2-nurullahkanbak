import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './badge.styles';

const Badge = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.BadgeContainerStyle}>
        <Text style={styles.BadgeTextStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Badge;
