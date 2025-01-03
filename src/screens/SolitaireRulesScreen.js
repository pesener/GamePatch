import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const SolitaireRulesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>SOLITAIRE RULES</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objective of the Game</Text>
          <Text style={styles.text}>
            Build four foundation piles (one for each suit: hearts, diamonds,
            clubs, spades) in ascending order from Ace to King.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Game Setup</Text>
          <Text style={styles.text}>
            • Deck: A standard 52-card deck (no jokers)
          </Text>

          <Text style={styles.boldText}>Tableau Setup:</Text>
          <Text style={styles.text}>
            • Seven columns are laid out, with the first column containing one
            card, the second column two cards, and so on
            {"\n"}• Only the top card in each column is face-up; the rest are
            face-down
          </Text>

          <Text style={styles.text}>
            • Stock (Draw Pile): The remaining cards are placed face-down in the
            stock pile
            {"\n"}• Foundations: Four empty foundation piles are designated for
            each suit
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gameplay Overview</Text>
          <Text style={styles.text}>
            The game involves moving cards between the tableau, stock, and
            foundations according to specific rules until all cards are placed
            in the foundation piles.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rules</Text>

          <Text style={styles.boldText}>1. Foundations</Text>
          <Text style={styles.text}>
            • Cards must be built up in ascending order, starting with Ace and
            ending with King
            {"\n"}• Only cards of the same suit can be placed in each foundation
          </Text>

          <Text style={styles.boldText}>2. Tableau</Text>
          <Text style={styles.text}>
            • Cards in the tableau are arranged in descending order (King to
            Ace) and must alternate in color (e.g., red 6 on black 7)
            {"\n"}• Only face-up cards can be moved
            {"\n"}• A sequence of cards can be moved together if they maintain
            the alternating color and descending order
            {"\n"}• Empty tableau columns can only be filled with a King or a
            sequence starting with a King
          </Text>

          <Text style={styles.boldText}>3. Stock and Waste Pile</Text>
          <Text style={styles.text}>
            • When you can't make a move on the tableau, draw cards from the
            stock pile
            {"\n"}• If the stock pile runs out, the waste pile can be turned
            over to form a new stock (based on your chosen rule set)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Winning the Game</Text>
          <Text style={styles.text}>
            The game is won when all cards are moved to their respective
            foundation piles.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Variations</Text>
          <Text style={styles.boldText}>Draw One or Draw Three:</Text>
          <Text style={styles.text}>
            • Draw One: Draw one card from the stock at a time (easier)
            {"\n"}• Draw Three: Draw three cards from the stock at a time (more
            challenging)
          </Text>

          <Text style={styles.boldText}>Limited Passes:</Text>
          <Text style={styles.text}>
            Some versions limit the number of times you can pass through the
            stock pile.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tips for Beginners</Text>
          <Text style={styles.text}>
            • Always uncover hidden cards in the tableau before drawing from the
            stock
            {"\n"}• Prioritize building up the foundation piles
            {"\n"}• Use empty tableau spaces strategically to move cards
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

export default SolitaireRulesScreen;
