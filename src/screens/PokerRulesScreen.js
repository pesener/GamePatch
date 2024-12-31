import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const PokerRulesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Poker Rules</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objective of the Game</Text>
        <Text style={styles.text}>
          Win chips by forming the best five-card poker hand or by forcing all
          other players to fold before the showdown.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Game Setup</Text>
        <Text style={styles.text}>
          • Players: 2-10 players
          {"\n"}• Deck: Standard 52-card deck, no jokers
          {"\n"}• Chips: Each player starts with a set number of chips
          {"\n"}• Dealer Button: Rotates clockwise after each hand to designate
          the dealer
        </Text>

        <Text style={styles.boldText}>Blinds:</Text>
        <Text style={styles.text}>
          • Small Blind (SB): The player to the dealer's left posts a small
          forced bet
          {"\n"}• Big Blind (BB): The next player posts a larger forced bet
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gameplay</Text>
        <Text style={styles.boldText}>1. The Deal</Text>
        <Text style={styles.text}>
          Each player is dealt two hole cards face down.
        </Text>

        <Text style={styles.boldText}>2. Betting Rounds</Text>
        <Text style={styles.subheading}>a. Pre-Flop</Text>
        <Text style={styles.text}>
          • Players look at their hole cards
          {"\n"}• Betting starts with the player to the left of the big blind
          {"\n"}• Options:
          {"\n"} - Fold: Discard cards and exit the round
          {"\n"} - Call: Match the current bet
          {"\n"} - Raise: Increase the bet amount
        </Text>

        <Text style={styles.subheading}>b. The Flop</Text>
        <Text style={styles.text}>
          • The dealer places three community cards face up on the table
          {"\n"}• A new betting round begins, starting with the player to the
          dealer's left
        </Text>

        <Text style={styles.subheading}>c. The Turn</Text>
        <Text style={styles.text}>
          • A fourth community card is dealt face up
          {"\n"}• Another betting round occurs
        </Text>

        <Text style={styles.subheading}>d. The River</Text>
        <Text style={styles.text}>
          • A fifth and final community card is dealt face up
          {"\n"}• The final betting round begins
        </Text>

        <Text style={styles.boldText}>3. Showdown</Text>
        <Text style={styles.text}>
          • If two or more players remain after the final betting round, they
          reveal their hole cards
          {"\n"}• The best five-card poker hand wins the pot
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hand Rankings (Best to Worst)</Text>
        <Text style={styles.text}>
          1. Royal Flush: A, K, Q, J, 10 of the same suit
          {"\n"}2. Straight Flush: Five consecutive cards of the same suit
          {"\n"}3. Four of a Kind: Four cards of the same rank
          {"\n"}4. Full House: Three of a kind and a pair
          {"\n"}5. Flush: Five cards of the same suit, not consecutive
          {"\n"}6. Straight: Five consecutive cards of mixed suits
          {"\n"}7. Three of a Kind: Three cards of the same rank
          {"\n"}8. Two Pair: Two sets of pairs
          {"\n"}9. One Pair: Two cards of the same rank
          {"\n"}10. High Card: Highest card when no other hand is made
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Betting Terms</Text>
        <Text style={styles.text}>
          • Check: Pass the action to the next player without betting
          {"\n"}• Bet: Place chips into the pot
          {"\n"}• Call: Match the current bet
          {"\n"}• Raise: Increase the current bet
          {"\n"}• All-In: Bet all your remaining chips
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Winning the Pot</Text>
        <Text style={styles.text}>
          • The player with the highest-ranked hand wins the pot
          {"\n"}• If all others fold, the last player remaining wins the pot
          without revealing their cards
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tips for Beginners</Text>
        <Text style={styles.text}>
          • Learn hand rankings by heart
          {"\n"}• Only play strong starting hands to avoid unnecessary risks
          {"\n"}• Bluff cautiously, especially against experienced players
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

export default PokerRulesScreen;
