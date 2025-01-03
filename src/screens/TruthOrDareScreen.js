import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const TruthOrDareScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Truth or Dare Rules</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objective of the Game</Text>
          <Text style={styles.text}>
            Players take turns choosing between answering a question truthfully
            or performing a dare. The goal is to have fun, bond, and challenge
            each other in creative ways!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Game Setup</Text>
          <Text style={styles.boldText}>Players:</Text>
          <Text style={styles.text}>
            3 or more players (the more, the better!).
          </Text>

          <Text style={styles.boldText}>Materials (Optional):</Text>
          <Text style={styles.text}>
            • A list of pre-written truths and dares
            {"\n"}• A bottle or spinner (if choosing randomly who goes next)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gameplay Overview</Text>
          <Text style={styles.text}>
            Players take turns being asked "Truth or Dare?" by the group.
            Depending on their choice, they either answer a question honestly or
            complete a dare.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rules</Text>
          <Text style={styles.boldText}>1. Starting the Game</Text>
          <Text style={styles.text}>
            • Players sit in a circle
            {"\n"}• The first player is chosen randomly (e.g., spin a bottle)
            {"\n"}• The chosen player is asked, "Truth or Dare?"
          </Text>

          <Text style={styles.boldText}>2. Player's Choice</Text>
          <Text style={styles.text}>
            Truth:
            {"\n"}• The player must honestly answer a question asked by the
            group
            {"\n"}• Example: "What's the most embarrassing thing you've ever
            done?"
            {"\n\n"}Dare:
            {"\n"}• The player must complete a challenge or task given by the
            group
            {"\n"}• Example: "Do 10 push-ups" or "Sing a song"
          </Text>

          <Text style={styles.boldText}>3. Refusing a Challenge</Text>
          <Text style={styles.text}>
            Players can choose to skip a question or dare, but they must face a
            penalty (e.g., lose a point, take a drink, or perform an extra
            challenge).
          </Text>

          <Text style={styles.boldText}>4. Passing the Turn</Text>
          <Text style={styles.text}>
            After completing their turn, the current player picks the next
            person (or the bottle determines it).
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Winning the Game</Text>
          <Text style={styles.text}>
            There's no formal winner—just have fun!
            {"\n\n"}For competitive versions, track points:
            {"\n"}• +1 for completing a truth or dare
            {"\n"}• -1 for refusing
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Variations</Text>
          <Text style={styles.boldText}>Themed Rounds:</Text>
          <Text style={styles.text}>
            Focus on specific topics, like relationships, school, or hobbies.
          </Text>

          <Text style={styles.boldText}>Extreme Dares:</Text>
          <Text style={styles.text}>
            Add harder challenges for a more daring group.
          </Text>

          <Text style={styles.boldText}>Timed Dares:</Text>
          <Text style={styles.text}>
            Players must complete a dare within a set time limit (e.g., 30
            seconds).
          </Text>

          <Text style={styles.boldText}>Safe Zone:</Text>
          <Text style={styles.text}>
            Allow players one "safe pass" per game to skip without penalty.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sample Truths and Dares</Text>
          <Text style={styles.boldText}>Truths:</Text>
          <Text style={styles.text}>
            • "What's the weirdest thing you've ever eaten?"
            {"\n"}• "Have you ever lied to get out of trouble?"
            {"\n"}• "Who was your first crush?"
          </Text>

          <Text style={styles.boldText}>Dares:</Text>
          <Text style={styles.text}>
            • "Do your best animal impression"
            {"\n"}• "Text a random emoji to the last person you texted"
            {"\n"}• "Speak in an accent for the next two rounds"
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tips for a Fun Game</Text>
          <Text style={styles.text}>
            • Keep truths and dares age-appropriate and respectful of everyone's
            boundaries
            {"\n"}• Be creative! Tailor challenges to the group's interests
            {"\n"}• Ensure everyone feels included and comfortable during the
            game
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

export default TruthOrDareScreen;
