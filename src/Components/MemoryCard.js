import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const BOARD_SIZE = 4; // 4x4 board

const generateCards = () => {
  // Generate cards array with pairs
  const cards = [];
  for (let i = 0; i < BOARD_SIZE * BOARD_SIZE / 2; i++) {
    cards.push(i, i); // Pair of cards
  }
  // Shuffle cards
  return cards.sort(() => Math.random() - 0.5);
};

const MemoryGameScreen = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedIndices, setFlippedIndices] = useState([]);

  const handleCardPress = (index) => {
    // Handle card press logic
  };

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => handleCardPress(index)}
        >
          <Text>{flippedIndices.includes(index) ? card : '?'}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    justifyContent: 'center',
  },
  card: {
    width: Dimensions.get('window').width / BOARD_SIZE - 10,
    height: Dimensions.get('window').width / BOARD_SIZE - 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
});

export default MemoryGameScreen;
