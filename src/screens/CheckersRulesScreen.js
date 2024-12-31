import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const CheckersRulesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Checkers (Draughts) Rules</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objective</Text>
        <Text style={styles.text}>
          The goal is to capture all of your opponent's pieces or block them so
          they cannot move.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Setup</Text>
        <Text style={styles.boldText}>Board:</Text>
        <Text style={styles.text}>
          Use an 8x8 board with alternating light and dark squares. Only the
          dark squares are used for gameplay.
        </Text>

        <Text style={styles.boldText}>Pieces:</Text>
        <Text style={styles.text}>
          Each player starts with 12 pieces (checkers), placed on the dark
          squares of the three rows closest to them.
        </Text>

        <Text style={styles.boldText}>Starting Positions:</Text>
        <Text style={styles.text}>
          Pieces are arranged on the dark squares only, leaving the central two
          rows empty.
        </Text>

        <Text style={styles.boldText}>Turn Order:</Text>
        <Text style={styles.text}>
          Players take turns, with the player using the darker pieces (often
          black) going first.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gameplay</Text>

        <Text style={styles.boldText}>1. Movement Rules</Text>
        <Text style={styles.subheading}>Basic Movement:</Text>
        <Text style={styles.text}>
          Pieces move diagonally forward, one square at a time, to an unoccupied
          square.
        </Text>

        <Text style={styles.subheading}>Capturing an Opponent's Piece:</Text>
        <Text style={styles.text}>
          If an opponent's piece is diagonally adjacent, and the square
          immediately beyond it is empty, you must jump over the opponent's
          piece, landing on the empty square.
          {"\n\n"}The jumped piece is captured and removed from the board.
        </Text>

        <Text style={styles.subheading}>Multiple Captures:</Text>
        <Text style={styles.text}>
          If, after jumping, another jump is possible, you must continue jumping
          in the same turn (multi-jump).
        </Text>

        <Text style={styles.boldText}>2. King Rules</Text>
        <Text style={styles.subheading}>Becoming a King:</Text>
        <Text style={styles.text}>
          If a piece reaches the opponent's back row, it is crowned a king.
          {"\n"}Place another piece on top of it to signify it is now a king.
        </Text>

        <Text style={styles.subheading}>King Movement:</Text>
        <Text style={styles.text}>
          Kings can move and capture diagonally forward and backward.
        </Text>

        <Text style={styles.boldText}>3. Mandatory Capture</Text>
        <Text style={styles.text}>
          If a jump (capture) is available, you must take it. If multiple
          capture options exist, you may choose which sequence to follow.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Winning the Game</Text>
        <Text style={styles.boldText}>Victory Conditions:</Text>
        <Text style={styles.text}>
          You win if you capture all of your opponent's pieces or block them so
          they cannot make a legal move.
        </Text>

        <Text style={styles.boldText}>Draw:</Text>
        <Text style={styles.text}>
          If neither player can move or capture in a way that changes the game
          state significantly, the game may end in a draw.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0c3f1",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  boldText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginTop: 10,
    marginBottom: 5,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#34495e",
    marginTop: 8,
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
});

export default CheckersRulesScreen;
