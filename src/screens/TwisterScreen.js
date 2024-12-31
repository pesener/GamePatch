import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const TwisterScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Twister Rules</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objective of the Game</Text>
        <Text style={styles.text}>
          The goal is to stay balanced on the mat longer than your opponents.
          You lose if you fall or touch the mat with any part of your body other
          than your hands and feet.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Setup</Text>
        <Text style={styles.boldText}>Equipment:</Text>
        <Text style={styles.text}>
          • Mat: A plastic sheet with six rows of colored circles (red, yellow,
          blue, and green)
          {"\n"}• Spinner: A dial divided into four quadrants: left hand, right hand,
          left foot, and right foot, with each color represented in every
          quadrant
        </Text>

        <Text style={styles.boldText}>Placement:</Text>
        <Text style={styles.text}>
          Spread the mat flat on the floor, ensuring enough space around it for
          players to move without hitting furniture or walls.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gameplay</Text>
        <Text style={styles.boldText}>Starting Positions:</Text>
        <Text style={styles.text}>
          • Players remove their shoes and stand on opposite ends of the mat
          {"\n"}• Place one foot on any circle closest to you on your starting row
        </Text>

        <Text style={styles.boldText}>Taking Turns:</Text>
        <Text style={styles.text}>
          • One player acts as the referee (or spinner) to spin the dial and
          call out the instructions (e.g., "Right hand on red")
          {"\n"}• All players follow the instructions simultaneously
        </Text>

        <Text style={styles.boldText}>Placing Hands and Feet:</Text>
        <Text style={styles.text}>
          • Each player moves the specified hand or foot to a circle of the
          given color
          {"\n"}• If a circle of the required color is already occupied, you must
          share the circle without pushing others off
        </Text>

        <Text style={styles.boldText}>Falling or Touching the Mat:</Text>
        <Text style={styles.text}>
          • If any part of your body (other than your hands and feet) touches
          the mat, you're eliminated
        </Text>

        <Text style={styles.boldText}>No Backtracking:</Text>
        <Text style={styles.text}>
          • Once a hand or foot is placed, it cannot move unless the spinner
          calls for a new move involving that limb
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Winning the Game</Text>
        <Text style={styles.text}>
          The last player remaining on the mat without falling or touching the
          mat incorrectly wins.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Optional Rules for Fun Variations</Text>
        <Text style={styles.boldText}>Timed Moves:</Text>
        <Text style={styles.text}>
          Set a timer for 10 seconds to complete each move. Players failing to
          move in time are out.
        </Text>

        <Text style={styles.boldText}>Elimination Spinner:</Text>
        <Text style={styles.text}>
          Add a "wild card" segment to the spinner. When spun, the referee can
          choose a player to sit out for one turn.
        </Text>

        <Text style={styles.boldText}>Reverse Moves:</Text>
        <Text style={styles.text}>
          Occasionally call out "reverse," requiring players to swap their hands
          and feet between colors.
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
  text: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
});

export default TwisterScreen;
