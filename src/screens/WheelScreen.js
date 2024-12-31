import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  Modal,
  TextInput,
  Alert,
  Easing,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Svg, { G, Path, Text as SvgText, Circle } from "react-native-svg";

const WHEEL_SIZE = Dimensions.get("window").width * 0.8;
const CENTER = WHEEL_SIZE / 2;
const SPIN_DURATION = 4000;
const BACKGROUND_COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEEAD",
  "#D4A5A5",
  "#9B59B6",
  "#3498DB",
  "#FF9F1C",
  "#2ECC71",
  "#E74C3C",
  "#1ABC9C",
];

const WheelScreen = () => {
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;

  const addItem = () => {
    if (newItem.trim() === "") {
      Alert.alert("Error", "Please enter an item");
      return;
    }

    if (items.length >= 12) {
      Alert.alert("Error", "Maximum 12 items allowed");
      return;
    }

    setItems([...items, { id: Date.now().toString(), text: newItem.trim() }]);
    setNewItem("");
    setModalVisible(false);
  };

  const spinWheel = () => {
    if (isSpinning || items.length < 2) return;

    setIsSpinning(true);

    // Calculate final rotation
    const numberOfSpins = 5; // Fixed number of spins for consistency
    const sliceAngle = 360 / items.length;
    const randomIndex = Math.floor(Math.random() * items.length);
    const baseRotation = numberOfSpins * 360; // Base rotation amount
    const randomExtra = Math.random() * sliceAngle; // Random offset within the slice
    const targetRotation = -(
      baseRotation +
      randomIndex * sliceAngle +
      randomExtra
    );

    // Reset spin value
    spinValue.setValue(0);

    // Single smooth animation
    Animated.timing(spinValue, {
      toValue: targetRotation,
      duration: 4000,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      setIsSpinning(false);
    });
  };

  const resetWheel = () => {
    if (isSpinning) return;
    setItems([]);
    spinValue.setValue(0);
  };

  const renderWheel = () => {
    if (items.length === 0) {
      return (
        <View style={styles.emptyWheel}>
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={50}
            color="#db3171"
          />
          <Text style={styles.emptyText}>Add items to spin the wheel</Text>
        </View>
      );
    }

    return (
      <View style={styles.wheelWrapper}>
        {/* Arrow - Now outside of SVG and always on top */}
        <View style={styles.arrowContainer}>
          <View style={styles.arrow} />
        </View>

        <Animated.View
          style={[
            styles.wheel,
            {
              transform: [
                {
                  rotate: spinValue.interpolate({
                    inputRange: [-3600, 0],
                    outputRange: ["3600deg", "0deg"],
                  }),
                },
              ],
            },
          ]}
        >
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
            {items.map((item, index) => {
              // For the first item, use 180 degrees (half circle)
              // For subsequent items, divide the remaining 180 degrees
              const totalSlices = items.length === 1 ? 2 : items.length;
              const sliceAngle = items.length === 1 ? 180 : 360 / totalSlices;
              const angle = sliceAngle * index - 90; // Start from top
              const rad = (angle * Math.PI) / 180;
              const rad2 = ((angle + sliceAngle) * Math.PI) / 180;

              // Calculate path for slice
              const x1 = CENTER + CENTER * Math.cos(rad);
              const y1 = CENTER + CENTER * Math.sin(rad);
              const x2 = CENTER + CENTER * Math.cos(rad2);
              const y2 = CENTER + CENTER * Math.sin(rad2);

              // Calculate text position
              const textAngle = angle + sliceAngle / 2;
              const textRad = (textAngle * Math.PI) / 180;
              const textX = CENTER + CENTER * 0.6 * Math.cos(textRad);
              const textY = CENTER + CENTER * 0.6 * Math.sin(textRad);

              // Only render if this is the first item (half circle) or if there are multiple items
              if (items.length === 1 && index === 0) {
                return (
                  <G key={item.id}>
                    <Path
                      d={`M ${CENTER} ${CENTER} L ${x1} ${y1} A ${CENTER} ${CENTER} 0 0 1 ${x2} ${y2} Z`}
                      fill={BACKGROUND_COLORS[index % BACKGROUND_COLORS.length]}
                      stroke="#333"
                      strokeWidth="1"
                    />
                    <SvgText
                      x={textX}
                      y={textY}
                      fill="white"
                      fontSize={WHEEL_SIZE / 20}
                      fontWeight="bold"
                      textAnchor="middle"
                      transform={`rotate(${textAngle}, ${textX}, ${textY})`}
                    >
                      {item.text}
                    </SvgText>
                  </G>
                );
              } else if (items.length > 1) {
                return (
                  <G key={item.id}>
                    <Path
                      d={`M ${CENTER} ${CENTER} L ${x1} ${y1} A ${CENTER} ${CENTER} 0 0 1 ${x2} ${y2} Z`}
                      fill={BACKGROUND_COLORS[index % BACKGROUND_COLORS.length]}
                      stroke="#333"
                      strokeWidth="1"
                    />
                    <SvgText
                      x={textX}
                      y={textY}
                      fill="white"
                      fontSize={WHEEL_SIZE / 20}
                      fontWeight="bold"
                      textAnchor="middle"
                      transform={`rotate(${textAngle}, ${textX}, ${textY})`}
                    >
                      {item.text}
                    </SvgText>
                  </G>
                );
              }
              return null;
            })}
          </Svg>
        </Animated.View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Wheel */}
      <View style={styles.wheelContainer}>{renderWheel()}</View>

      {/* Controls at bottom */}
      <View style={styles.controls}>
        {items.length >= 2 && (
          <TouchableOpacity
            style={[
              styles.spinWheelButton,
              isSpinning && styles.spinButtonDisabled,
            ]}
            onPress={spinWheel}
            disabled={isSpinning}
          >
            <Text style={styles.spinWheelButtonText}>
              {isSpinning ? "Spinning..." : "SPIN THE WHEEL"}
            </Text>
          </TouchableOpacity>
        )}

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible(true)}
          >
            <MaterialCommunityIcons name="plus" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.resetButton,
              items.length === 0 && styles.resetButtonDisabled,
            ]}
            onPress={resetWheel}
            disabled={items.length === 0 || isSpinning}
          >
            <MaterialCommunityIcons name="refresh" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Add Item Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Item</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={newItem}
                onChangeText={setNewItem}
                placeholder="Enter item name"
                maxLength={12}
              />
              <Text style={styles.charCount}>{newItem.length}/12</Text>
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.addItemButton]}
                onPress={addItem}
              >
                <Text style={styles.addItemButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0c3f1",
  },
  controls: {
    width: "100%",
    paddingVertical: 40,
    paddingHorizontal: 20,
    paddingBottom: 50,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#d0c3f1",
    backgroundColor: "#d0c3f1",
    gap: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  wheelContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  wheelWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  wheel: {
    width: WHEEL_SIZE,
    height: WHEEL_SIZE,
  },
  emptyWheel: {
    width: WHEEL_SIZE,
    height: WHEEL_SIZE,
    borderRadius: WHEEL_SIZE / 2,
    borderWidth: 2,
    borderColor: "#db3171",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  emptyText: {
    marginTop: 10,
    color: "#db3171",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  addButton: {
    backgroundColor: "#2196F3",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  resetButton: {
    backgroundColor: "#FF6B6B",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  resetButtonDisabled: {
    opacity: 0.5,
  },
  spinWheelButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: "100%",
    maxWidth: 300,
  },
  spinWheelButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  spinButtonDisabled: {
    opacity: 0.5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    width: "85%",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  charCount: {
    textAlign: "right",
    color: "#666",
    fontSize: 12,
    marginTop: 4,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginTop: 10,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  addItemButton: {
    backgroundColor: "#4CAF50",
  },
  cancelButtonText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "600",
  },
  addItemButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  arrowContainer: {
    position: "absolute",
    top: -10,
    width: "100%",
    alignItems: "center",
    zIndex: 999,
  },
  arrow: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopWidth: 30,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default WheelScreen;
