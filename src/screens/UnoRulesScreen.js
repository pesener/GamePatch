import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const UnoRulesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>UNO Rules</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objective of the Game</Text>
          <Text style={styles.text}>
            Be the first player to score 500 points by being the first to play
            all your cards in each round and earning points based on the cards
            left in your opponents' hands.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Game Setup</Text>
          <Text style={styles.boldText}>Players:</Text>
          <Text style={styles.text}>2-10 players</Text>

          <Text style={styles.boldText}>Deck:</Text>
          <Text style={styles.text}>
            108 cards, consisting of:
            {"\n\n"}• Number Cards: 0-9 in four colors (red, blue, green,
            yellow)
            {"\n\n"}• Action Cards:
            {"\n"} - Skip: Skip the next player's turn
            {"\n"} - Reverse: Reverse the order of play
            {"\n"} - Draw Two: The next player draws two cards and loses their
            turn
            {"\n\n"}• Wild Cards:
            {"\n"} - Wild: Allows the player to choose the color of play
            {"\n"} - Wild Draw Four: Allows the player to choose the color and
            forces the next player to draw four cards (use only if you have no
            other playable cards)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How to Play</Text>

          <Text style={styles.boldText}>Dealing Cards:</Text>
          <Text style={styles.text}>
            • Each player is dealt 7 cards
            {"\n"}• Place the remaining cards face down to form the draw pile
            {"\n"}• Flip the top card of the draw pile to start the discard pile
          </Text>

          <Text style={styles.boldText}>Starting Play:</Text>
          <Text style={styles.text}>
            • The player to the left of the dealer goes first
            {"\n"}• Play proceeds clockwise (or counterclockwise if a Reverse
            card is played)
          </Text>

          <Text style={styles.boldText}>Playing a Card:</Text>
          <Text style={styles.text}>
            • On their turn, a player must play a card that matches the top card
            of the discard pile by number, color, or symbol
            {"\n"}• If a player cannot play a card, they must draw one card from
            the draw pile:
            {"\n"} - If the drawn card is playable, they may play it immediately
            {"\n"} - Otherwise, their turn ends
          </Text>

          <Text style={styles.boldText}>Action Cards:</Text>
          <Text style={styles.text}>
            • Skip: The next player loses their turn
            {"\n"}• Reverse: Reverses the direction of play
            {"\n"}• Draw Two: The next player draws two cards and loses their
            turn
            {"\n"}• Wild: The player chooses the next color of play
            {"\n"}• Wild Draw Four: The player chooses the next color, and the
            next player draws four cards
            {"\n"}• A Wild Draw Four can only be played if the player has no
            other playable cards
          </Text>

          <Text style={styles.boldText}>Saying "UNO":</Text>
          <Text style={styles.text}>
            • When a player has only one card left, they must shout "UNO" before
            their turn ends
            {"\n"}• If another player catches them not saying UNO, they must
            draw two cards as a penalty
          </Text>

          <Text style={styles.boldText}>Winning a Round:</Text>
          <Text style={styles.text}>
            • A player wins the round by playing their last card
            {"\n"}• Points are scored based on the cards left in opponents'
            hands
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Scoring</Text>
          <Text style={styles.text}>
            • Number Cards: Face value (0-9)
            {"\n"}• Action Cards:
            {"\n"} - Skip, Reverse, Draw Two: 20 points each
            {"\n"} - Wild, Wild Draw Four: 50 points each
            {"\n\n"}The first player to reach 500 points wins the game.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Special Rules (Optional)</Text>
          <Text style={styles.text}>
            • Stacking: Players can stack Draw Two or Wild Draw Four cards if
            they have one, forcing the next player to draw cumulatively
            {"\n\n"}• 7-0 Rule: When a 7 is played, the player may trade hands
            with another player. When a 0 is played, all players pass their
            hands in the direction of play
            {"\n\n"}• Jump-In Rule: If a player has the exact card (same number
            and color) as the top card on the discard pile, they can play it
            immediately, out of turn
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tips for Beginners</Text>
          <Text style={styles.text}>
            • Save Wild and Wild Draw Four cards for emergencies
            {"\n"}• Keep track of the colors opponents are playing to guess
            their remaining cards
            {"\n"}• Use action cards strategically to disrupt opponents' plans
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

export default UnoRulesScreen;
