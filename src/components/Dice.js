import React from "react";
import { View, StyleSheet } from "react-native";

const Dice = ({ value }) => {
  const renderDots = () => {
    const dots = [];
    switch (value) {
      case 1:
        dots.push(<View key="center" style={[styles.dot, styles.centerDot]} />);
        break;
      case 2:
        dots.push(
          <View key="topRight" style={[styles.dot, styles.topRight]} />,
          <View key="bottomLeft" style={[styles.dot, styles.bottomLeft]} />
        );
        break;
      case 3:
        dots.push(
          <View key="topRight" style={[styles.dot, styles.topRight]} />,
          <View key="center" style={[styles.dot, styles.centerDot]} />,
          <View key="bottomLeft" style={[styles.dot, styles.bottomLeft]} />
        );
        break;
      case 4:
        dots.push(
          <View key="topLeft" style={[styles.dot, styles.topLeft]} />,
          <View key="topRight" style={[styles.dot, styles.topRight]} />,
          <View key="bottomLeft" style={[styles.dot, styles.bottomLeft]} />,
          <View key="bottomRight" style={[styles.dot, styles.bottomRight]} />
        );
        break;
      case 5:
        dots.push(
          <View key="topLeft" style={[styles.dot, styles.topLeft]} />,
          <View key="topRight" style={[styles.dot, styles.topRight]} />,
          <View key="center" style={[styles.dot, styles.centerDot]} />,
          <View key="bottomLeft" style={[styles.dot, styles.bottomLeft]} />,
          <View key="bottomRight" style={[styles.dot, styles.bottomRight]} />
        );
        break;
      case 6:
        dots.push(
          <View key="topLeft" style={[styles.dot, styles.topLeft]} />,
          <View key="topRight" style={[styles.dot, styles.topRight]} />,
          <View key="middleLeft" style={[styles.dot, styles.middleLeft]} />,
          <View key="middleRight" style={[styles.dot, styles.middleRight]} />,
          <View key="bottomLeft" style={[styles.dot, styles.bottomLeft]} />,
          <View key="bottomRight" style={[styles.dot, styles.bottomRight]} />
        );
        break;
    }
    return dots;
  };

  return <View style={styles.dice}>{renderDots()}</View>;
};

const styles = StyleSheet.create({
  dice: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dot: {
    position: "absolute",
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#333",
  },
  centerDot: {
    top: "64%",
    left: "60%",
    transform: [{ translateX: -8 }, { translateY: -8 }],
  },
  topLeft: {
    top: "20%",
    left: "20%",
  },
  topRight: {
    top: "20%",
    right: "20%",
  },
  middleLeft: {
    top: "60%",
    left: "20%",
    transform: [{ translateY: -8 }],
  },
  middleRight: {
    top: "60%",
    right: "20%",
    transform: [{ translateY: -8 }],
  },
  bottomLeft: {
    bottom: "20%",
    left: "20%",
  },
  bottomRight: {
    bottom: "20%",
    right: "20%",
  },
});

export default Dice;
