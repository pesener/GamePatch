import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import Svg, { G, Path, Circle, Text as SvgText } from "react-native-svg";

const WHEEL_SIZE = Dimensions.get("window").width * 0.8;
const CENTER = WHEEL_SIZE / 2;
const COLORS = [
  { value: "#e92101" },
  { value: "#0072bb" },
  { value: "#ffde04" },
  { value: "#07a640" },
];

const TwisterSpinnerScreen = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;

  const spinArrow = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    spinValue.setValue(0);

    Animated.timing(spinValue, {
      toValue: 5 + Math.random(), // 5-6 full rotations plus random
      duration: 4000,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      setIsSpinning(false);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wheelWrapper}>
        {/* Static Wheel */}
        <View style={styles.wheel}>
          <Svg
            height={WHEEL_SIZE}
            width={WHEEL_SIZE}
            viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
          >
            <Circle
              cx={CENTER}
              cy={CENTER}
              r={CENTER - 1}
              stroke="#333"
              strokeWidth="2"
              fill="none"
            />

            {/* Vertical Line */}
            <Path
              d={`M ${CENTER} 0 L ${CENTER} ${WHEEL_SIZE}`}
              stroke="#333"
              strokeWidth="20"
            />
            {/* Horizontal Line */}
            <Path
              d={`M 0 ${CENTER} L ${WHEEL_SIZE} ${CENTER}`}
              stroke="#333"
              strokeWidth="4"
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

            {/* Vertical Dividing Line */}
            <Path
              d={`M ${CENTER} 0 L ${CENTER} ${WHEEL_SIZE}`}
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Horizontal Dividing Line */}
            <Path
              d={`M 0 ${CENTER} L ${WHEEL_SIZE} ${CENTER}`}
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Left Hand Text - Rendered last to be on top */}
            <SvgText
              x={CENTER * 0.5}
              y={CENTER * 0.5}
              fill="black"
              fontSize={WHEEL_SIZE / 10}
              fontWeight="bold"
              textAnchor="middle"
              transform={`rotate(-45, ${CENTER * 0.5}, ${CENTER * 0.5})`}
            >
              Left Hand
            </SvgText>

            {/* Left Foot Text - Rendered last to be on top */}
            <SvgText
              x={CENTER * 1.5}
              y={CENTER * 0.5}
              fill="black"
              fontSize={WHEEL_SIZE / 10}
              fontWeight="bold"
              textAnchor="middle"
              transform={`rotate(45, ${CENTER * 1.5}, ${CENTER * 0.5})`}
            >
              Left Foot
            </SvgText>

            {/* Right Foot Text - Rendered last to be on top */}
            <SvgText
              x={CENTER * 1.5}
              y={CENTER * 1.5}
              fill="black"
              fontSize={WHEEL_SIZE / 10}
              fontWeight="bold"
              textAnchor="middle"
              transform={`rotate(-45, ${CENTER * 1.5}, ${CENTER * 1.5})`}
            >
              Right Foot
            </SvgText>

            {/* Right Hand Text - Rendered last to be on top */}
            <SvgText
              x={CENTER * 0.5}
              y={CENTER * 1.5}
              fill="black"
              fontSize={WHEEL_SIZE / 10}
              fontWeight="bold"
              textAnchor="middle"
              transform={`rotate(45, ${CENTER * 0.5}, ${CENTER * 1.5})`}
            >
              Right Hand
            </SvgText>
          </Svg>

          {/* Center Arrow */}
          <Animated.View
            style={[
              styles.centerArrow,
              {
                transform: [
                  {
                    rotate: spinValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "360deg"],
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.arrow} />
          </Animated.View>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, isSpinning && styles.spinningButton]}
        onPress={spinArrow}
        disabled={isSpinning}
      >
        <Text style={styles.buttonText}>
          {isSpinning ? "Spinning..." : "Spin!"}
        </Text>
      </TouchableOpacity>
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
  wheelWrapper: {
    width: WHEEL_SIZE,
    height: WHEEL_SIZE,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#f8f9fa",
    borderRadius: WHEEL_SIZE / 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    marginBottom: 40,
  },
  wheel: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  centerArrow: {
    position: "absolute",
    width: 20,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 8,
    borderRightWidth: 7,
    borderBottomWidth: 210,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#2c3e50",
    transform: [{ translateY: -10 }],
  },
  button: {
    backgroundColor: "#db3171",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    transform: [{ scale: 1.1 }],
  },
  spinningButton: {
    opacity: 0.8,
    transform: [{ scale: 1.05 }],
  },
  buttonText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default TwisterSpinnerScreen;
