import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const MonopolyRulesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Monopoly Rules</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objective of the Game</Text>
        <Text style={styles.text}>
          Become the wealthiest player by buying, renting, and trading
          properties while bankrupting your opponents.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Game Setup</Text>
        <Text style={styles.boldText}>Players:</Text>
        <Text style={styles.text}>2-6 players.</Text>

        <Text style={styles.boldText}>Starting Money:</Text>
        <Text style={styles.text}>
          Each player starts with $1500 distributed as follows:
          {"\n"}• 2x $500
          {"\n"}• 4x $100
          {"\n"}• 1x $50
          {"\n"}• 1x $20
          {"\n"}• 2x $10
          {"\n"}• 1x $5
          {"\n"}• 5x $1
        </Text>

        <Text style={styles.boldText}>Place the Board:</Text>
        <Text style={styles.text}>
          • Shuffle and place the Chance and Community Chest cards on their
          respective spots.
        </Text>

        <Text style={styles.boldText}>Choose a Banker:</Text>
        <Text style={styles.text}>
          • The banker manages money, property cards, and houses/hotels.
        </Text>

        <Text style={styles.boldText}>Choose Tokens:</Text>
        <Text style={styles.text}>
          • Each player picks a token and places it on GO.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Game Play</Text>
        <Text style={styles.boldText}>Roll the Dice:</Text>
        <Text style={styles.text}>
          • Players take turns rolling two dice and moving their token the
          corresponding number of spaces clockwise.
        </Text>

        <Text style={styles.boldText}>Land on a Space:</Text>
        <Text style={styles.text}>
          • Follow the rules for the space you land on.
        </Text>

        <Text style={styles.boldText}>Doubles Rule:</Text>
        <Text style={styles.text}>
          • If you roll doubles, take another turn.
          {"\n"}• Roll doubles three times in a row, and you go to Jail.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Spaces and Actions</Text>
        <Text style={styles.boldText}>Properties:</Text>
        <Text style={styles.text}>
          • Unowned Property: Buy it at the listed price or let the banker
          auction it.
          {"\n"}• Owned Property: Pay rent to the owner based on the property
          card and any upgrades.
        </Text>

        <Text style={styles.boldText}>Chance/Community Chest:</Text>
        <Text style={styles.text}>
          • Draw a card and follow the instructions.
        </Text>

        <Text style={styles.boldText}>Tax Spaces:</Text>
        <Text style={styles.text}>
          • Pay the listed amount to the bank (e.g., Income Tax or Luxury Tax).
        </Text>

        <Text style={styles.boldText}>GO:</Text>
        <Text style={styles.text}>• Collect $200 each time you pass GO.</Text>

        <Text style={styles.boldText}>Jail:</Text>
        <Text style={styles.text}>
          • You're sent to jail by:
          {"\n"} - Landing on the "Go to Jail" space
          {"\n"} - Drawing a "Go to Jail" card
          {"\n"} - Rolling doubles three times
          {"\n"}• Getting Out:
          {"\n"} - Pay $50
          {"\n"} - Roll doubles
          {"\n"} - Use a "Get Out of Jail Free" card
        </Text>

        <Text style={styles.boldText}>Free Parking:</Text>
        <Text style={styles.text}>
          • No action is required unless house rules apply.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Buying and Developing Properties
        </Text>
        <Text style={styles.boldText}>Monopolies:</Text>
        <Text style={styles.text}>
          • If you own all properties of a color group, you have a monopoly.
          {"\n"}• You can charge double rent on undeveloped properties.
        </Text>

        <Text style={styles.boldText}>Houses:</Text>
        <Text style={styles.text}>
          • Build houses evenly across a monopoly.
          {"\n"}• The cost is on the property card.
        </Text>

        <Text style={styles.boldText}>Hotels:</Text>
        <Text style={styles.text}>
          • After four houses, you can upgrade to a hotel.
        </Text>

        <Text style={styles.boldText}>Mortgaging:</Text>
        <Text style={styles.text}>
          • If you need money, mortgage a property for the listed amount.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trading</Text>
        <Text style={styles.text}>
          • Players can trade money, properties, and Get Out of Jail Free cards.
          {"\n"}• Trades must be agreed upon by both parties.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bankruptcy</Text>
        <Text style={styles.text}>
          If you owe more than you can pay, you must sell properties or declare
          bankruptcy:
          {"\n"}• To a Player: Transfer all assets to the player you owe.
          {"\n"}• To the Bank: Return your properties to the bank.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Winning the Game</Text>
        <Text style={styles.text}>
          • The game ends when all players but one go bankrupt.
          {"\n"}• Alternatively, set a time limit and declare the wealthiest
          player the winner.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Optional/House Rules</Text>
        <Text style={styles.boldText}>Free Parking Jackpot:</Text>
        <Text style={styles.text}>
          • All taxes and fines go to a pot in the center.
          {"\n"}• The first player to land on Free Parking collects the pot.
        </Text>

        <Text style={styles.boldText}>Auction Rule:</Text>
        <Text style={styles.text}>
          • If a player decides not to buy an unowned property, the banker
          auctions it to the highest bidder.
        </Text>

        <Text style={styles.boldText}>Short Game Setup:</Text>
        <Text style={styles.text}>
          • Distribute a set number of properties randomly to players at the
          start to speed up gameplay.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tips for Beginners</Text>
        <Text style={styles.text}>
          • Focus on acquiring monopolies, especially color groups with high
          rent potential.
          {"\n"}• Avoid buying too many utilities and railroads early in the
          game.
          {"\n"}• Build houses as soon as possible to increase your income.
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
  },
  text: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
});

export default MonopolyRulesScreen;
