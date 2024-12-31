import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Svg, { Circle, Path, G } from "react-native-svg";

const ICON_SIZE = 40;
const CENTER = ICON_SIZE / 2;
const COLORS = [
  { value: "#FF6B6B" },
  { value: "#45B7D1" },
  { value: "#FFEEAD" },
  { value: "#96CEB4" },
];

const TwisterIcon = () => (
  <Svg
    height={ICON_SIZE}
    width={ICON_SIZE}
    viewBox={`0 0 ${ICON_SIZE} ${ICON_SIZE}`}
  >
    <Circle
      cx={CENTER}
      cy={CENTER}
      r={CENTER - 1}
      stroke="#333"
      strokeWidth="2"
      fill="none"
    />

    {/* Dividing Lines */}
    <Path
      d={`M ${CENTER} 0 L ${CENTER} ${ICON_SIZE}`}
      stroke="black"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <Path
      d={`M 0 ${CENTER} L ${ICON_SIZE} ${CENTER}`}
      stroke="black"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {Array.from({ length: 16 }).map((_, index) => {
      const sliceAngle = 360 / 16;
      const angle = sliceAngle * index - 90;
      const rad = (angle * Math.PI) / 180;
      const rad2 = ((angle + sliceAngle) * Math.PI) / 180;

      const x1 = CENTER + CENTER * Math.cos(rad);
      const y1 = CENTER + CENTER * Math.sin(rad);
      const x2 = CENTER + CENTER * Math.cos(rad2);
      const y2 = CENTER + CENTER * Math.sin(rad2);

      const colorIndex = Math.floor(index / 1) % COLORS.length;
      const color = COLORS[colorIndex].value;

      return (
        <G key={index}>
          <Path
            d={`M ${CENTER} ${CENTER} L ${x1} ${y1} A ${CENTER} ${CENTER} 0 0 1 ${x2} ${y2} Z`}
            fill={color}
            stroke="#333"
            strokeWidth="1"
          />
        </G>
      );
    })}
  </Svg>
);

const PartyGamesScreen = ({ navigation }) => {
  const partyGames = [
    {
      name: "Charades",
      icon: "account-group",
      iconComponent: null,
      onPress: () => navigation.navigate("Charades"),
    },
    {
      name: "Truth or Dare",
      icon: "comment-question",
      iconComponent: null,
      onPress: () => navigation.navigate("TruthOrDare"),
    },
    {
      name: "Never Have I Ever",
      icon: "hand-pointing-up",
      iconComponent: null,
      onPress: () => navigation.navigate("NeverHaveIEver"),
    },
    {
      name: "Pictionary",
      icon: "draw",
      iconComponent: null,
      onPress: () => navigation.navigate("Pictionary"),
    },
    {
      name: "Twister",
      icon: null,
      iconComponent: TwisterIcon,
      onPress: () => navigation.navigate("Twister"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Party Games</Text>

      {partyGames.map((game, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={game.onPress}
        >
          <View style={styles.iconContainer}>
            {game.iconComponent ? (
              <game.iconComponent />
            ) : (
              <MaterialCommunityIcons
                name={game.icon}
                size={40}
                color="#2c3e50"
              />
            )}
          </View>
          <Text style={styles.menuText}>{game.name}</Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color="#2c3e50"
          />
        </TouchableOpacity>
      ))}
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
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconContainer: {
    marginRight: 20,
  },
  menuText: {
    flex: 1,
    fontSize: 18,
    color: "#2c3e50",
    fontWeight: "600",
  },
});

export default PartyGamesScreen;
