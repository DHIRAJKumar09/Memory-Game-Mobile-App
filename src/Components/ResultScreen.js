import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function ResultScreen({ route, navigation }) {
  const { win } = route.params;

  return (
    <View style={styles.container}>
      {win ? <Text style={styles.winText}>Congratulations! You Won!</Text> : <Text style={styles.loseText}>Sorry! You Lost!</Text>}
      <Button title="Play Again" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  winText: {
    fontSize: 28,
    color: 'green',
    marginBottom: 20,
  },
  loseText: {
    fontSize: 28,
    color: 'red',
    marginBottom: 20,
  },
});

export default ResultScreen;
