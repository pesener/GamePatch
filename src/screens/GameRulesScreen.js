import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const GameRulesScreen = ({ navigation }) => {
  const gameCategories = [
    {
      name: "Classic Board Games",
      icon: "chess-knight",
      onPress: () => navigation.navigate("ClassicBoardGames"),
    },
    {
      name: "Card Games",
      icon: "cards",
      onPress: () => navigation.navigate("CardGames"),
    },
    {
      name: "Party Games",
      icon: "party-popper",
      onPress: () => navigation.navigate("PartyGames"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Game Rules</Text>

      {gameCategories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={category.onPress}
        >
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name={category.icon}
              size={40}
              color="#2c3e50"
            />
          </View>
          <Text style={styles.menuText}>{category.name}</Text>
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
    color: "#db3171",
    marginBottom: 30,
    textAlign: "center",
    letterSpacing: 2,
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
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

export default GameRulesScreen;
