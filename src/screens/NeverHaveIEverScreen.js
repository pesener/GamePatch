import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const NeverHaveIEverScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Never Have I Ever Rules</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objective of the Game</Text>
          <Text style={styles.text}>
            Players take turns revealing things they've never done. The goal is
            to learn fun and surprising facts about each other while trying to
            stay in the game the longest.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Game Setup</Text>
          <Text style={styles.boldText}>Players:</Text>
          <Text style={styles.text}>
            3 or more players (the more, the merrier!).
          </Text>

          <Text style={styles.boldText}>Materials (Optional):</Text>
          <Text style={styles.text}>
            • Tokens: 5-10 tokens for each player to keep track of points
            {"\n"}• Drink: If playing a drinking version, each player has a
            drink
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gameplay Overview</Text>
          <Text style={styles.text}>
            Players take turns making statements that start with "Never have I
            ever..." followed by something they have never done. Other players
            who have done the stated action must take an action, like losing a
            point or taking a drink.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rules</Text>
          <Text style={styles.boldText}>1. Starting the Game</Text>
          <Text style={styles.text}>
            • Players agree on the number of tokens or points each player starts
            with (e.g., 5)
            {"\n"}• The youngest player typically begins, and the game proceeds
            clockwise
          </Text>

          <Text style={styles.boldText}>2. Making a Statement</Text>
          <Text style={styles.text}>
            On their turn, a player makes a true statement starting with:
            {"\n"}• "Never have I ever..."
            {"\n"}Example: "Never have I ever gone skydiving."
          </Text>

          <Text style={styles.boldText}>3. Player Responses</Text>
          <Text style={styles.text}>
            Players who have done the action must:
            {"\n"}• Lose a token or point
            {"\n"}• Take a sip of their drink (if playing the drinking version)
            {"\n"}Players who haven't done the action do nothing.
          </Text>

          <Text style={styles.boldText}>4. Eliminating Players</Text>
          <Text style={styles.text}>
            • If a player loses all their tokens or points, they are eliminated
            {"\n"}• The game continues until only one player remains or players
            agree to end the game
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Winning the Game</Text>
          <Text style={styles.text}>
            The last player remaining with tokens or points wins. In the
            drinking version, there's no formal winner—it's all about the fun!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Variations</Text>
          <Text style={styles.boldText}>Themed Rounds:</Text>
          <Text style={styles.text}>
            Each round has a theme, such as travel, relationships, or food.
          </Text>

          <Text style={styles.boldText}>Speed Round:</Text>
          <Text style={styles.text}>
            Players make rapid-fire statements, and everyone must respond
            quickly.
          </Text>

          <Text style={styles.boldText}>Penalty Actions:</Text>
          <Text style={styles.text}>
            Instead of losing points or drinking, players perform funny dares or
            challenges.
          </Text>

          <Text style={styles.boldText}>Safe Zone:</Text>
          <Text style={styles.text}>
            Allow players to skip responding once per game if they're
            uncomfortable answering.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tips for Players</Text>
          <Text style={styles.text}>
            • Keep statements fun and lighthearted. Avoid overly personal or
            embarrassing topics unless everyone is comfortable
            {"\n"}• Mix up simple and creative statements to keep the game
            interesting
            {"\n"}• Respect boundaries—players can opt not to respond without
            penalty if needed
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

export default NeverHaveIEverScreen;
