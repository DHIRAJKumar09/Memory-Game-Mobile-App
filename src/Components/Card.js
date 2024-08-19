// Card.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const CARD_SIZE = 80;

const Card = ({ index, value, isFlipped, onPress }) => {
  const scaleAnimation = new Animated.Value(0);

  React.useEffect(() => {
    Animated.spring(scaleAnimation, {
      toValue: isFlipped ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [isFlipped]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Animated.View
        style={[
          styles.cardContent,
          {
            opacity: scaleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1],
            }),
            transform: [
              {
                scale: scaleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
            ],
          },
        ]}
      >
        {isFlipped ? <Text style={styles.cardText}>{value}</Text> : <Text style={styles.cardText}>?</Text>}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    margin: 5,
    borderRadius: 5,
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  cardText: {
    fontSize: 24,
  },
});

export default Card;
