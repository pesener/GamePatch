import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Platform,
  Easing,
  Alert,
} from "react-native";
import Svg, { Circle, Path, Text as SvgText, Rect, G } from "react-native-svg";

const { width } = Dimensions.get("window");
const COIN_SIZE = width * 0.5;

const CoinHeads = () => (
  <Svg width={COIN_SIZE} height={COIN_SIZE} viewBox="0 0 200 200">
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
    <Circle
      cx="100"
      cy="85"
      r="25"
      fill="none"
      stroke="#DAA520"
      strokeWidth="4"
    />
    <Rect x="75" y="120" width="50" height="10" fill="#DAA520" rx="5" />
    <SvgText
      x="100"
      y="170"
      textAnchor="middle"
      fill="#DAA520"
      fontSize="24"
      fontWeight="bold"
    >
      HEADS
    </SvgText>
  </Svg>
);

const CoinTails = () => (
  <Svg width={COIN_SIZE} height={COIN_SIZE} viewBox="0 0 200 200">
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

    {/* Ornate pattern */}
    <G>
      {/* Center star */}
      <Path
        d="M100 60 L110 95 L145 95 L115 115 L125 150 L100 130 L75 150 L85 115 L55 95 L90 95 Z"
        fill="#DAA520"
      />

      {/* Decorative circles */}
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
    </G>

    <SvgText
      x="100"
      y="170"
      textAnchor="middle"
      fill="#DAA520"
      fontSize="24"
      fontWeight="bold"
    >
      TAILS
    </SvgText>
  </Svg>
);

const CoinScreen = () => {
  const [result, setResult] = useState("");
  const [isHeads, setIsHeads] = useState(true);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;
  const randomResult = useRef(null);

  const flipCoin = () => {
    if (isFlipping) return;

    setIsFlipping(true);
    randomResult.current = Math.random() < 0.5;

    // Reset the spin value before starting new animation
    spinValue.setValue(0);

    // Create a smoother animation with easing
    Animated.sequence([
      // Initial fast spins
      Animated.timing(spinValue, {
        toValue: 0.7,
        duration: 1500,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
      // Slow down and finish
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.out(Easing.circle),
      }),
    ]).start(() => {
      setIsHeads(randomResult.current);
      if (randomResult.current) {
        setHeadsCount((prev) => prev + 1);
      } else {
        setTailsCount((prev) => prev + 1);
      }
      setIsFlipping(false);
      spinValue.setValue(0);
    });
  };

  const resetScores = () => {
    Alert.alert(
      "Reset Scores",
      "Are you sure you want to reset all scores?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Reset",
          onPress: () => {
            setHeadsCount(0);
            setTailsCount(0);
            setResult("");
          },
          style: "destructive"
        }
      ]
    );
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 0.7, 1],
    outputRange: [
      "0deg",
      "1800deg",
      randomResult.current ? "2160deg" : "2340deg",
    ], // 5 full spins then finish
  });

  const scale = spinValue.interpolate({
    inputRange: [0, 0.2, 0.8, 1],
    outputRange: [1, 0.9, 0.9, 1],
  });

  const translateY = spinValue.interpolate({
    inputRange: [0, 0.2, 0.8, 1],
    outputRange: [0, -30, -30, 0],
  });

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.scoreContainer}>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreLabel}>HEADS</Text>
            <Text style={styles.scoreText}>{headsCount}</Text>
          </View>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreLabel}>TAILS</Text>
            <Text style={styles.scoreText}>{tailsCount}</Text>
          </View>
        </View>
      </View>

      <View style={styles.middleSection}>
        <View style={styles.coinWrapper}>
          <View style={styles.coinContainer}>
            <Animated.View
              style={[
                styles.coin,
                {
                  transform: [
                    { perspective: 2000 },
                    { translateY },
                    { scale },
                    { rotateY: spin },
                  ],
                },
              ]}
            >
              {isHeads ? <CoinHeads /> : <CoinTails />}
            </Animated.View>
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={[styles.flipButton, isFlipping && styles.flipButtonDisabled]}
          onPress={flipCoin}
          disabled={isFlipping}
        >
          <Text style={styles.flipButtonText}>
            {isFlipping ? "Flipping..." : "Coin Flip"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.resetButton, isFlipping && styles.resetButtonDisabled]}
          onPress={resetScores}
          disabled={isFlipping}
        >
          <Text style={styles.resetButtonText}>Reset Scores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0c3f1",
  },
  topSection: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#d0c3f1",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 30,
  },
  scoreBox: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    minWidth: 100,
    borderWidth: 1,
    borderColor: "#db3171",
  },
  scoreLabel: {
    fontSize: 16,
    color: "#db3171",
    fontWeight: "600",
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#db3171",
    marginTop: 5,
  },
  middleSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  coinWrapper: {
    width: COIN_SIZE + 40,
    height: COIN_SIZE + 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: (COIN_SIZE + 40) / 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.84,
    elevation: 5,
  },
  coinContainer: {
    width: COIN_SIZE,
    height: COIN_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  coin: {
    width: COIN_SIZE,
    height: COIN_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomSection: {
    backgroundColor: "#d0c3f1",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: Platform.OS === "ios" ? 40 : 20,
    gap: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flipButton: {
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
    alignItems: "center",
  },
  flipButtonDisabled: {
    backgroundColor: "#db3171",
    opacity: 0.7,
  },
  flipButtonText: {
    color: "#eee",
    fontSize: 20,
    fontWeight: "bold",
  },
  resetButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#db3171",
    alignItems: "center",
  },
  resetButtonDisabled: {
    borderColor: "#FFE55C",
    opacity: 0.7,
  },
  resetButtonText: {
    color: "#db3171",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CoinScreen;
