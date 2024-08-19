import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

function DifficultyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Difficulty Level</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Easy"
          onPress={() => navigation.navigate('Game', { level: 'Easy' })}
          color="#4CAF50" // Green for easy level
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Medium"
          onPress={() => navigation.navigate('Game', { level: 'Medium' })}
          color="#FFC107" // Amber for medium level
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Hard"
          onPress={() => navigation.navigate('Game', { level: 'Hard' })}
          color="#F44336" // Red for hard level
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282C34', // Dark background for better contrast
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for the title text
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default DifficultyScreen;
