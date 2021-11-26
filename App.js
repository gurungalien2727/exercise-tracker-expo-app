import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExerciseList from './components/ExerciseList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open on your app!</Text>
      <ExerciseList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});