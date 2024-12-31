import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ScrabbleRulesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Scrabble Rules</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objective of the Game</Text>
        <Text style={styles.text}>
          Score the highest points by forming words on the board using letter
          tiles.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Game Setup</Text>
        <Text style={styles.boldText}>Players:</Text>
        <Text style={styles.text}>2-4 players.</Text>

        <Text style={styles.boldText}>Tiles:</Text>
        <Text style={styles.text}>
          100 letter tiles, including blank tiles (wild cards).
        </Text>

        <Text style={styles.boldText}>Board:</Text>
        <Text style={styles.text}>
          A 15x15 grid with bonus squares:
          {"\n"}• Double Letter (DL): Doubles the score of the letter placed on
          it.
          {"\n"}• Triple Letter (TL): Triples the score of the letter placed on
          it.
          {"\n"}• Double Word (DW): Doubles the total word score.
          {"\n"}• Triple Word (TW): Triples the total word score.
        </Text>

        <Text style={styles.boldText}>Tile Racks:</Text>
        <Text style={styles.text}>
          Each player draws 7 tiles from the bag to start.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gameplay</Text>
        <Text style={styles.boldText}>Starting the Game:</Text>
        <Text style={styles.text}>
          • The player with the letter closest to "A" (excluding blanks) starts.
          {"\n"}• Return these tiles to the bag and reshuffle.
          {"\n"}• The first word must be placed on the star square (center of
          the board).
        </Text>

        <Text style={styles.boldText}>Building Words:</Text>
        <Text style={styles.text}>
          • Form words horizontally (left-to-right) or vertically
          (top-to-bottom).
          {"\n"}• All words must connect to the existing word(s) on the board.
        </Text>

        <Text style={styles.boldText}>Scoring:</Text>
        <Text style={styles.text}>
          • Add up the points for each letter in the word.
          {"\n"}• Apply bonuses from DL, TL, DW, and TW squares as applicable.
          {"\n"}• First Turn Bonus: Earn 50 extra points for using all 7 tiles
          in one turn (a "Bingo").
        </Text>

        <Text style={styles.boldText}>Replacing Tiles:</Text>
        <Text style={styles.text}>
          • On your turn, you can exchange tiles instead of playing, but you
          forfeit your turn.
        </Text>

        <Text style={styles.boldText}>Ending a Turn:</Text>
        <Text style={styles.text}>
          • Draw tiles from the bag to refill your rack to 7 tiles.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Challenges</Text>
        <Text style={styles.text}>
          • If you think an opponent's word is invalid, you can challenge it.
          {"\n"}• If the word is valid, the challenger loses their turn.
          {"\n"}• If the word is invalid, the opponent removes the word and
          loses their turn.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ending the Game</Text>
        <Text style={styles.text}>
          The game ends when:
          {"\n"}• All tiles are used, and no more moves are possible.
          {"\n"}• A player uses all their tiles, triggering the end.
        </Text>

        <Text style={styles.boldText}>Final Scoring:</Text>
        <Text style={styles.text}>
          • Subtract the value of remaining tiles from each player's score.
          {"\n"}• Add the sum of all unplayed tiles to the score of the player
          who used all their tiles.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Winning the Game</Text>
        <Text style={styles.text}>
          The player with the highest total score wins!
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Blank Tiles</Text>
        <Text style={styles.text}>
          • Blanks can represent any letter but have no point value.
          {"\n"}• Once placed, a blank's letter cannot be changed.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Word Rules</Text>
        <Text style={styles.text}>
          • Words must be valid according to a standard dictionary.
          {"\n"}• You can use regular words, but no proper nouns, abbreviations,
          prefixes, suffixes, or hyphenated words are allowed.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tips for Beginners</Text>
        <Text style={styles.text}>
          • Use premium squares (DL, TL, DW, TW) to maximize your score.
          {"\n"}• Aim to form multiple words in a single turn by placing tiles
          parallel to existing words.
          {"\n"}• Save high-value letters (like Q, Z, J, X) for premium squares.
          {"\n"}• Use two-letter words (e.g., "QI," "OX") to score efficiently.
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

export default ScrabbleRulesScreen;
