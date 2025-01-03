import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const PictionaryRulesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>PICTIONARY RULES</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objective of the Game</Text>
          <Text style={styles.text}>
            Players guess words or phrases based on drawings created by their
            teammates. The team with the most correct guesses wins!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Game Setup</Text>
          <Text style={styles.boldText}>Players:</Text>
          <Text style={styles.text}>
            Minimum of 4 players, divided into 2 or more teams.
          </Text>

          <Text style={styles.boldText}>Materials Needed:</Text>
          <Text style={styles.text}>
            • Pictionary word cards (or a list of words/phrases)
            {"\n"}• Drawing surface (whiteboard, paper, or digital tablet)
            {"\n"}• Timer (60 seconds)
            {"\n"}• Pen or marker
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gameplay Overview</Text>
          <Text style={styles.text}>
            The game is played in turns. On each turn, one player from the team
            becomes the "drawer" and attempts to draw clues for their team to
            guess the word or phrase.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rules</Text>
          <Text style={styles.boldText}>1. Drawing and Guessing</Text>
          <Text style={styles.text}>
            • The drawer selects a word or phrase from the Pictionary card or
            list
            {"\n"}• The timer starts as soon as the word is revealed
            {"\n"}• The drawer must draw clues for their team without:
            {"\n"} - Speaking or using verbal cues
            {"\n"} - Writing letters, numbers, or the word itself
            {"\n"} - Using gestures or actions
          </Text>

          <Text style={styles.boldText}>2. Guessing</Text>
          <Text style={styles.text}>
            • Teammates shout out guesses based on the drawing
            {"\n"}• If the team guesses the word or phrase within the time
            limit, they score a point
          </Text>

          <Text style={styles.boldText}>3. Turns</Text>
          <Text style={styles.text}>
            Teams take turns, and a different player becomes the drawer each
            time.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Winning the Game</Text>
          <Text style={styles.text}>
            • The game ends when a predetermined number of rounds is completed
            {"\n"}• The team with the most points wins
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories (Optional)</Text>
          <Text style={styles.text}>
            Words and phrases can be categorized for added variety:
            {"\n"}• Objects
            {"\n"}• Actions
            {"\n"}• Places
            {"\n"}• People or Characters
            {"\n"}• Movies or TV Shows
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Variations</Text>
          <Text style={styles.boldText}>All Play:</Text>
          <Text style={styles.text}>
            Both teams draw and guess the same word simultaneously. The first
            team to guess correctly scores a point.
          </Text>

          <Text style={styles.boldText}>Speed Round:</Text>
          <Text style={styles.text}>
            Teams try to guess as many words as possible within a set time
            limit.
          </Text>

          <Text style={styles.boldText}>Custom Categories:</Text>
          <Text style={styles.text}>
            Add specific themes, like holidays, food, or famous landmarks, for
            more fun.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tips for Players</Text>
          <Text style={styles.text}>
            • Focus on simple shapes and symbols to represent the word
            {"\n"}• Use arrows or lines to emphasize parts of the drawing
            {"\n"}• Work quickly but clearly to maximize guessing time
          </Text>
        </View>
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
  contentContainer: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#db3171",
    marginBottom: 30,
    textAlign: "center",
    letterSpacing: 2,
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
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
  text: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
});

export default PictionaryRulesScreen;
