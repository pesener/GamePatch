import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const CharadesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Charades Rules</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objective of the Game</Text>
          <Text style={styles.text}>
            Players act out words or phrases without speaking, and their
            teammates guess the word or phrase within a time limit. The team
            with the most correct guesses wins!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Game Setup</Text>
          <Text style={styles.boldText}>Players:</Text>
          <Text style={styles.text}>
            4 or more players, divided into 2 or more teams.
          </Text>

          <Text style={styles.boldText}>Materials Needed:</Text>
          <Text style={styles.text}>
            • A list of words or phrases (e.g., movies, books, famous people,
            actions)
            {"\n"}• Timer (e.g., 60 seconds per round)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gameplay Overview</Text>
          <Text style={styles.text}>
            The game is played in rounds. In each round, one player acts out a
            word or phrase while their teammates try to guess it.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rules</Text>
          <Text style={styles.boldText}>1. Acting and Guessing</Text>
          <Text style={styles.text}>
            • The actor picks a word or phrase from the list (or draws a card)
            {"\n"}• The timer starts immediately
            {"\n"}• The actor uses gestures, movements, and facial expressions
            to convey the word or phrase without:
            {"\n"} - Speaking or making sounds
            {"\n"} - Writing letters, numbers, or the word itself
            {"\n"} - Pointing to objects in the room (unless agreed upon in
            advance)
          </Text>

          <Text style={styles.boldText}>2. Guessing</Text>
          <Text style={styles.text}>
            • The actor's team shouts out guesses while the actor continues
            acting
            {"\n"}• If the team guesses correctly before time runs out, they
            score a point
          </Text>

          <Text style={styles.boldText}>3. Turns</Text>
          <Text style={styles.text}>
            Teams alternate turns, with a new player acting out the next word or
            phrase.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Winning the Game</Text>
          <Text style={styles.text}>
            • The game ends after a predetermined number of rounds or when the
            list of words is exhausted
            {"\n"}• The team with the most points wins
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories (Optional)</Text>
          <Text style={styles.text}>
            • Movies
            {"\n"}• Books
            {"\n"}• Songs
            {"\n"}• TV Shows
            {"\n"}• Famous People
            {"\n"}• Actions (e.g., swimming, dancing)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Variations</Text>
          <Text style={styles.boldText}>All Play:</Text>
          <Text style={styles.text}>
            Both teams act out the same word or phrase at the same time. The
            first team to guess correctly scores a point.
          </Text>

          <Text style={styles.boldText}>Speed Round:</Text>
          <Text style={styles.text}>
            Teams try to guess as many words as possible within a set time.
          </Text>

          <Text style={styles.boldText}>Silent Movie Style:</Text>
          <Text style={styles.text}>
            Players are allowed to mime props or environments to enhance their
            acting.
          </Text>

          <Text style={styles.boldText}>Custom Categories:</Text>
          <Text style={styles.text}>
            Players can create categories tailored to their group, like "Inside
            Jokes" or "Vacation Memories."
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tips for Actors</Text>
          <Text style={styles.text}>
            • Break down complex phrases into smaller parts and act them out
            sequentially
            {"\n"}• Use common signals:
            {"\n"} - Point to ear: "Sounds like"
            {"\n"} - Number of fingers: Number of words
            {"\n"} - Thumbs up/down: Correct or incorrect guesses
            {"\n"}• Stay animated and creative to keep the game fun and lively!
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

export default CharadesScreen;
