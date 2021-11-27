import React from 'react';
import {TextInput, Text, View, FlatList} from 'react-native';
import styles from './Input.styles';

function MyInputText(value) {
  const [textInputValue, setTextInputValue] = React.useState([]);
  const addInputText = () => {
    setTextInputValue([...textInputValue, {placeholder: 'Name'}]);
  };
  return (
    <View>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setTextInputValue(textInputValue)}
        value={textInputValue}
        placeholder="Name"
      />
    </View>
  );
}

export default MyInputText;
