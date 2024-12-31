import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Svg, { Circle, Path, G } from "react-native-svg";

const { width, height } = Dimensions.get("window");
const MENU_COIN_SIZE = 80;

const MenuCoin = () => (
  <Svg width={32} height={32} viewBox="0 0 200 200">
    <Circle
      cx="100"
      cy="100"
      r="95"
      fill="#FFD700"
      stroke="#DAA520"
      strokeWidth="5"
    />
    <Circle
      cx="100"
      cy="100"
      r="85"
      fill="none"
      stroke="#DAA520"
      strokeWidth="2"
    />
    <Path
      d="M100 60 L110 95 L145 95 L115 115 L125 150 L100 130 L75 150 L85 115 L55 95 L90 95 Z"
      fill="#DAA520"
    />
    <Circle
      cx="100"
      cy="100"
      r="40"
      fill="none"
      stroke="#DAA520"
      strokeWidth="3"
    />
    <Circle
      cx="100"
      cy="100"
      r="50"
      fill="none"
      stroke="#DAA520"
      strokeWidth="2"
    />
  </Svg>
);

const MenuWheel = () => {
  const size = 40;
  const center = size / 2;
  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEEAD",
    "#D4A5A5",
  ];
  const slices = 6;
  const radius = size / 2 - 2;

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {Array.from({ length: slices }).map((_, index) => {
        const startAngle = (index * 360) / slices;
        const endAngle = ((index + 1) * 360) / slices;
        const startRad = (startAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;
        const x1 = center + radius * Math.cos(startRad);
        const y1 = center + radius * Math.sin(startRad);
        const x2 = center + radius * Math.cos(endRad);
        const y2 = center + radius * Math.sin(endRad);

        return (
          <Path
            key={index}
            d={`M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`}
            fill={colors[index % colors.length]}
            stroke="#333"
            strokeWidth="0.5"
          />
        );
      })}
      <Circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#333"
        strokeWidth="1"
      />
      {/* Center dot */}
      <Circle cx={center} cy={center} r={2} fill="#333" />
    </Svg>
  );
};

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

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>GamePatch</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.menuContainer}>
          {/* Dice Icon Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Dice")}
            style={styles.menuItem}
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="dice-multiple"
                size={40}
                color="#e74c3c"
              />
            </View>
            <Text style={styles.menuText}>Dice Roller</Text>
          </TouchableOpacity>

          {/* Coin Icon Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Coin")}
            style={styles.menuItem}
          >
            <View style={styles.iconContainer}>
              <MenuCoin />
            </View>
            <Text style={styles.menuText}>Coin Flip</Text>
          </TouchableOpacity>

          {/* Spin the Wheel Icon Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Wheel")}
            style={styles.menuItem}
          >
            <View style={styles.iconContainer}>
              <MenuWheel />
            </View>
            <Text style={styles.menuText}>Spin the Wheel</Text>
          </TouchableOpacity>

          {/* Random Selection Tool Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("RandomSelection")}
            style={styles.menuItem}
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="shuffle-variant"
                size={40}
                color="#333"
              />
            </View>
            <Text style={styles.menuText}>Random Selection</Text>
          </TouchableOpacity>

          {/* Twister Spinner Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("TwisterSpinner")}
            style={styles.menuItem}
          >
            <View style={styles.iconContainer}>
              <TwisterIcon />
            </View>
            <Text style={styles.menuText}>Twister Spinner</Text>
          </TouchableOpacity>

          {/* Scores Button */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("Scores")}
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="trophy" size={40} color="#FFD700" />
            </View>
            <Text style={styles.menuText}>Scores</Text>
          </TouchableOpacity>

          {/* Game Rules Button */}
          <TouchableOpacity
            style={[styles.menuItem, styles.rulesButton]}
            onPress={() => navigation.navigate("GameRules")}
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="book-open-variant"
                size={40}
                color="#333"
              />
            </View>
            <Text style={styles.menuText}>Game Rules</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0c3f1",
  },
  header: {
    padding: 20,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#efebe2",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginTop: 50,
    marginBottom: 20,

    shadowOpacity: 0.35,
    shadowRadius: 3.84,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "900",
    color: "#db3171",
    letterSpacing: 2,
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },

  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  menuContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 12,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: "48%",
    height: 100,
  },
  iconContainer: {
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  menuText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2c3e50",
    flex: 1,
  },
  rulesButton: {
    borderWidth: 2,
    borderColor: "#2c3e50",
  },
});

export default HomeScreen;
