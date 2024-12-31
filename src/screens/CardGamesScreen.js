import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CardGamesScreen = ({ navigation }) => {
  const cardGames = [
    {
      name: "Poker",
      icon: "cards-spade",
      onPress: () => navigation.navigate("PokerRules"),
    },
    {
      name: "Bridge",
      icon: "cards-diamond",
      onPress: () => navigation.navigate("BridgeRules"),
    },
    {
      name: "UNO",
      icon: "cards-playing-outline",
      onPress: () => navigation.navigate("UnoRules"),
    },
    {
      name: "Solitaire",
      icon: "cards-heart",
      onPress: () => navigation.navigate("SolitaireRules"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Card Games</Text>

      {cardGames.map((game, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={game.onPress}
        >
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name={game.icon}
              size={40}
              color="#2c3e50"
            />
          </View>
          <Text style={styles.menuText}>{game.name}</Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color="#2c3e50"
          />
        </TouchableOpacity>
      ))}

      <View style={styles.divider} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0c3f1",
    padding: 20,
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 30,
    textAlign: "center",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  iconContainer: {
    marginRight: 15,
    width: 50,
    alignItems: "center",
  },
  menuText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: "#2c3e50",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 10,
  },
});

export default CardGamesScreen;
