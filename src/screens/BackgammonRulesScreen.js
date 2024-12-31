import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const BackgammonRulesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Backgammon Rules</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objective of the Game</Text>
        <Text style={styles.text}>
          Move all your checkers into your home board and then bear them off
          (remove them from the board). The first player to bear off all their
          checkers wins!
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Game Setup</Text>
        <Text style={styles.boldText}>Board Layout:</Text>
        <Text style={styles.text}>
          • The board has 24 triangular spaces called points, divided into four
          quadrants:
          {"\n"} - Home Board and Outer Board for each player
          {"\n"}• Points are numbered from 1 to 24
        </Text>

        <Text style={styles.boldText}>Checkers:</Text>
        <Text style={styles.text}>
          • Each player has 15 checkers of their color (white or black)
          {"\n"}• Starting positions:
          {"\n"} - 2 checkers on point 24
          {"\n"} - 5 checkers on point 13
          {"\n"} - 3 checkers on point 8{"\n"} - 5 checkers on point 6
        </Text>

        <Text style={styles.boldText}>Dice:</Text>
        <Text style={styles.text}>• Each player uses two six-sided dice</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Game Play</Text>
        <Text style={styles.boldText}>Starting the Game:</Text>
        <Text style={styles.text}>
          • Each player rolls one die
          {"\n"}• The player with the higher roll moves first, using the
          combined roll
          {"\n"}• In case of a tie, roll again
        </Text>

        <Text style={styles.boldText}>Moving Checkers:</Text>
        <Text style={styles.text}>
          • Move checkers based on the numbers rolled on the dice
          {"\n"}• Each die represents a separate move
          {"\n"}• Checkers move forward (toward point 1) according to the dice
          rolls
        </Text>

        <Text style={styles.boldText}>Valid Moves:</Text>
        <Text style={styles.text}>
          • A checker can only land on an open point (not occupied by two or
          more opposing checkers)
          {"\n"}• You may split the dice roll between two different checkers or
          use both dice for one checker
          {"\n"}• Doubles: Roll the same number on both dice, and play the
          numbers twice (e.g., roll 4-4, play 4+4+4+4)
        </Text>

        <Text style={styles.boldText}>Hitting and Entering:</Text>
        <Text style={styles.text}>
          • A point with only one opposing checker is a blot
          {"\n"}• Landing on a blot sends that checker to the bar (off the
          board)
          {"\n"}• A checker on the bar must re-enter the board before making
          other moves
          {"\n"}• To re-enter, roll a number corresponding to an open point in
          the opponent's home board
        </Text>

        <Text style={styles.boldText}>Bearing Off:</Text>
        <Text style={styles.text}>
          • Once all your checkers are in your home board (points 1-6), you can
          start bearing off
          {"\n"}• Bear off by rolling a number that matches the point of a
          checker
          {"\n"}• If you roll higher than the highest occupied point, you can
          bear off the farthest checker
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Winning the Game</Text>
        <Text style={styles.text}>
          • The first player to bear off all their checkers wins
        </Text>

        <Text style={styles.boldText}>Additional types of wins:</Text>
        <Text style={styles.text}>
          • Gammon: Win before the opponent bears off any checkers (2x points)
          {"\n"}• Backgammon: Win with the opponent having checkers on the bar
          or in your home board (3x points)
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Optional Doubling Cube</Text>
        <Text style={styles.text}>
          • Players can use the doubling cube to increase the stakes
          {"\n"}• The cube starts at 1x
          {"\n"}• A player can propose doubling the stakes at the start of their
          turn
          {"\n"}• The opponent must accept or forfeit the game
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tips for Beginners</Text>
        <Text style={styles.text}>
          • Prioritize building blocks of two or more checkers to protect your
          positions
          {"\n"}• Aim to hit your opponent's blots to disrupt their progress
          {"\n"}• Use high rolls to move checkers closer to the home board
          quickly
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
  },
  text: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
});

export default BackgammonRulesScreen;
