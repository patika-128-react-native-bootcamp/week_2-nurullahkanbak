import React from 'react';
import {Text, View, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import Badge from './src/components/Badge/badge';
import styles from './src/components/Badge/badge.styles';
import Button from './src/components/Button/Button';
import MyInputText from './src/components/Input/InputText';
import MyInputPrice from './src/components/Input/InputPrice';
import MyProductCardName from './src/components/ProductCard/ProductCardName';
import MyProductCardPrice from './src/components/ProductCard/ProductCardPrice';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.BadgeAlignment}>
        <Badge text="Artan Fiyat" />
        <Badge text="Azalan Fiyat" />
        <Badge text="Tarih" />
      </View>
      <View style={mainstyles.cardcontainer}>
        <MyProductCardName />
        <MyProductCardPrice />
      </View>
      <View style={mainstyles.bottomcontainer}>
        <MyInputText />
        <MyInputPrice />
        <Button text="Add" />
      </View>
    </SafeAreaView>
  );
}

const mainstyles = StyleSheet.create({
  topcontainer: {
    padding: 5,
    flex: 1,
    justifyContent: 'flex-start',
  },
  bottomcontainer: {
    padding: 5,
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default App;
