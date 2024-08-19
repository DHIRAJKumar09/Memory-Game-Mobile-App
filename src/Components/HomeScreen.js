import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const animation = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.title,
          {
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              },
            ],
          },
        ]}
      >
        Welcome to Memory Game
      </Animated.Text>
      <Animated.View style={{ marginTop: 20, opacity: animation }}>
        <Button
          title="Start Game"
          onPress={() => {
            startAnimation();
            setTimeout(() => navigation.navigate('Difficulty'), 1000);
          }}
          color="#841584"
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // A green background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginHorizontal: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
});

export default HomeScreen;
