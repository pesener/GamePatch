import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Switch,
} from "react-native";
import Dice from "../components/Dice";

const DiceScreen = () => {
  const [dice1Value, setDice1Value] = useState(1);
  const [dice2Value, setDice2Value] = useState(1);
  const [spinValue] = useState(new Animated.Value(0));
  const [isDualDice, setIsDualDice] = useState(true);

  const rollDice = () => {
    Animated.sequence([
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(spinValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      const newDice1 = Math.floor(Math.random() * 6) + 1;
      const newDice2 = Math.floor(Math.random() * 6) + 1;
      setDice1Value(newDice1);
      if (isDualDice) {
        setDice2Value(newDice2);
      }
    });
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Single</Text>
        <Switch
          value={isDualDice}
          onValueChange={setIsDualDice}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDualDice ? "#2c3e50" : "#f4f3f4"}
        />
        <Text style={styles.switchText}>Dual</Text>
      </View>

      <View style={styles.diceContainer}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <Dice value={dice1Value} />
        </Animated.View>
        {isDualDice && (
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Dice value={dice2Value} />
          </Animated.View>
        )}
      </View>

      <TouchableOpacity style={styles.rollButton} onPress={rollDice}>
        <Text style={styles.rollButtonText}>
          Roll {isDualDice ? "Dice" : "Dice"}
        </Text>
      </TouchableOpacity>

      {isDualDice ? (
        <Text style={styles.totalText}>Total: {dice1Value + dice2Value}</Text>
      ) : (
        <Text style={styles.totalText}>Total: {dice1Value}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0c3f1",
    alignItems: "center",
    justifyContent: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    gap: 10,
  },
  switchText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  diceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    gap: 20,
  },
  rollButton: {
    backgroundColor: "#db3171",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  rollButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  totalText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});

export default DiceScreen;
