import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Alert, Text } from 'react-native';
import Card from './Card';

const { width } = Dimensions.get('window');
const BOARD_SIZE = 4;

const generateCards = () => {
  const cards = [];
  for (let i = 0; i < BOARD_SIZE * BOARD_SIZE / 2; i++) {
    cards.push(i, i);
  }
  return cards.sort(() => Math.random() - 0.5);
};

const getMoveLimit = (level) => {
  switch (level) {
    case 'easy':
      return 30;
    case 'medium':
      return 20;
    case 'hard':
      return 15;
    default:
      return 25;
  }
};

const GameScreen = ({ route, navigation }) => {
  const { level } = route.params;
  const [cards, setCards] = useState(generateCards());
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [moves, setMoves] = useState(0);
  const [win, setWin] = useState(false);
  const moveLimit = getMoveLimit(level);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;

      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedIndices([...matchedIndices, firstIndex, secondIndex]);
      }

      setTimeout(() => {
        setFlippedIndices([]);
      }, 1000);

      setMoves(moves + 1);
    }
  }, [flippedIndices]);

  useEffect(() => {
    if (matchedIndices.length === cards.length) {
      setWin(true);
      Alert.alert('Congratulations!', 'You won the game!', [{ text: 'OK', onPress: () => navigation.navigate('Home') }]);
    } else if (moves >= moveLimit) {
      Alert.alert('Game Over', 'You have reached the move limit!', [{ text: 'OK', onPress: () => navigation.navigate('Home') }]);
    }
  }, [matchedIndices, moves]);

  const handleCardPress = (index) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index) && !matchedIndices.includes(index)) {
      setFlippedIndices([...flippedIndices, index]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.movesText}>Moves: {moves} / {moveLimit}</Text>
      {cards.map((card, index) => (
        <Card
          key={index}
          index={index}
          value={card}
          isFlipped={flippedIndices.includes(index) || matchedIndices.includes(index)}
          onPress={() => handleCardPress(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginLeft:15,
  },
  movesText: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default GameScreen;
