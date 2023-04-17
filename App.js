import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  const boardSize = 8;
  const board = [];

  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      const isBlack = (i + j) % 2 === 1;
      const squareStyle = [styles.square, isBlack ? styles.blackSquare : styles.whiteSquare];
      row.push(<View key={`${i}${j}`} style={squareStyle} />);
    }
    board.push(<View key={i} style={styles.boardRow}>{row}</View>);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chess Layout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'brown',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boardRow: {
    flexDirection: 'row',
  },
  square: {
    borderWidth : 2,
    width: 50,
    height: 50,
  },
  blackSquare: {
    backgroundColor: 'black',
  },
  whiteSquare: {
    backgroundColor: 'white',
  },
  text: {
    padding: 10,
    fontSize : 40,
    fontWeight : 'bold',
    margin : 10,
  }
});

export default App;
