import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const BridgeRulesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bridge Rules</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objective of the Game</Text>
        <Text style={styles.text}>
          Bridge is a partnership card game for four players. The goal is to win
          as many tricks as possible based on the contract agreed upon during
          bidding.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Game Setup</Text>
        <Text style={styles.boldText}>Players:</Text>
        <Text style={styles.text}>
          • Four players form two partnerships, seated opposite each other
          {"\n"}• Partners are referred to as North-South and East-West
        </Text>

        <Text style={styles.boldText}>Deck:</Text>
        <Text style={styles.text}>• A standard 52-card deck is used</Text>

        <Text style={styles.boldText}>Dealer:</Text>
        <Text style={styles.text}>
          • The dealer rotates clockwise after each hand
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gameplay Overview</Text>
        <Text style={styles.text}>
          Bridge is played in two main phases:
          {"\n"}1. The Bidding (Auction)
          {"\n"}2. The Play
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. The Bidding Phase</Text>
        <Text style={styles.boldText}>Objective of Bidding:</Text>
        <Text style={styles.text}>
          • Determine the "contract" (i.e., how many tricks one partnership
          commits to winning and the trump suit, if any)
        </Text>

        <Text style={styles.boldText}>How Bidding Works:</Text>
        <Text style={styles.text}>
          • Players bid in clockwise order, starting with the dealer
          {"\n"}• A bid specifies:
          {"\n"} - Number of Tricks: Total tricks over six that the partnership
          commits to winning (e.g., 1 means 7 tricks, 2 means 8 tricks)
          {"\n"} - Suit or No-Trump: Choose one of the four suits (hearts,
          diamonds, spades, clubs) as trump, or play without a trump suit
          (No-Trump)
          {"\n"}• Pass: A player may pass instead of bidding
        </Text>

        <Text style={styles.boldText}>Double and Redouble:</Text>
        <Text style={styles.text}>
          • Double: Challenges the opponents to meet their contract, increasing
          the score stakes
          {"\n"}• Redouble: Increases the stakes further if a double is
          challenged
        </Text>

        <Text style={styles.boldText}>End of Bidding:</Text>
        <Text style={styles.text}>
          • The bidding ends after three consecutive passes
          {"\n"}• The final bid becomes the contract
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. The Play Phase</Text>
        <Text style={styles.boldText}>Objective of Play:</Text>
        <Text style={styles.text}>
          • The partnership that won the contract tries to fulfill it by winning
          the specified number of tricks
        </Text>

        <Text style={styles.boldText}>How Play Works:</Text>
        <Text style={styles.text}>
          • Declarer:
          {"\n"} - The player who first bid the contract suit becomes the
          declarer
          {"\n"} - The declarer's partner becomes the dummy
          {"\n"}• Dummy's Role:
          {"\n"} - The dummy places their cards face up on the table after the
          opening lead and does not participate further in the play
          {"\n"}• Trick Play:
          {"\n"} - The player to the declarer's left leads the first card
          (opening lead)
          {"\n"} - Players must follow suit if possible. If not, they may play
          any card
          {"\n"} - The highest card of the led suit wins the trick, unless a
          trump card is played, in which case the highest trump wins
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Scoring</Text>
        <Text style={styles.boldText}>Tricks:</Text>
        <Text style={styles.text}>
          Each trick beyond the first six contributes to the partnership's score
          based on the contract:
          {"\n"}• Clubs or Diamonds: 20 points per trick
          {"\n"}• Hearts or Spades: 30 points per trick
          {"\n"}• No-Trump: 40 points for the first trick, 30 for subsequent
          tricks
        </Text>

        <Text style={styles.boldText}>Bonus Points:</Text>
        <Text style={styles.text}>
          • Game Bonus: Awarded for reaching 100 points through one or more
          contracts
          {"\n"}• Slam Bonus: Awarded for bidding and making 12 (small slam) or
          13 (grand slam) tricks
          {"\n"}• Overtricks: Extra tricks beyond the contract earn additional
          points
        </Text>

        <Text style={styles.boldText}>Penalty Points:</Text>
        <Text style={styles.text}>
          • Undertricks: Tricks missed from the contract result in points for
          the opponents
          {"\n"}• Doubled and redoubled undertricks incur heavier penalties
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Winning the Game</Text>
        <Text style={styles.text}>
          • A game consists of two or more rounds
          {"\n"}• The partnership that wins two games forms a rubber and earns
          bonus points
          {"\n"}• The overall winner is the partnership with the highest total
          score at the end of the rubber
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tips for Beginners</Text>
        <Text style={styles.text}>
          • Learn the basics of bidding conventions, like Stayman or Blackwood,
          to communicate effectively with your partner
          {"\n"}• Focus on counting high-card points (HCP) during bidding:
          {"\n"} - Ace = 4 points
          {"\n"} - King = 3 points
          {"\n"} - Queen = 2 points
          {"\n"} - Jack = 1 point
          {"\n"}• During play, watch for high cards played to deduce opponents'
          remaining cards
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

export default BridgeRulesScreen;
