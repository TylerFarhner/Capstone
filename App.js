import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'

import Header from './src/components/Header'
import Card from './src/components/Card'


export default function App() {

  

  return (
    <View>
      <Header />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
