import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  Animated,
  Easing,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RandomSelectionScreen = () => {
  const [players, setPlayers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newPlayer, setNewPlayer] = useState("");
  const [shuffledPlayers, setShuffledPlayers] = useState([]);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  // Animation values for each player
  const animatedValues = useRef(
    players.map(() => new Animated.Value(0))
  ).current;
  const shuffleAnimations = useRef([]).current;

  // Update animated values when players change
  React.useEffect(() => {
    animatedValues.length = players.length;
    for (let i = 0; i < players.length; i++) {
      if (!animatedValues[i]) {
        animatedValues[i] = new Animated.Value(0);
      }
    }
  }, [players]);

  const addPlayer = () => {
    if (newPlayer.trim()) {
      setPlayers([...players, newPlayer.trim()]);
      setNewPlayer("");
      setModalVisible(false);
      setIsShuffled(false);
    }
  };

  const removePlayer = (index) => {
    Alert.alert(
      "Delete Player",
      "Are you sure you want to delete this player?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => {
            const newPlayers = [...players];
            newPlayers.splice(index, 1);
            setPlayers(newPlayers);

            if (isShuffled) {
              const newShuffled = [...shuffledPlayers];
              newShuffled.splice(index, 1);
              setShuffledPlayers(newShuffled);
              if (newShuffled.length < 2) {
                setIsShuffled(false);
              }
            }
          },
          style: "destructive"
        }
      ]
    );
  };

  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const animateShuffling = () => {
    setIsShuffling(true);

    // Reset all animations
    shuffleAnimations.length = 0;
    animatedValues.forEach((value) => value.setValue(0));

    // Create animations for each player
    players.forEach((_, index) => {
      const randomDelay = Math.random() * 200;

      // Create multiple shuffle animations for each item
      for (let i = 0; i < 3; i++) {
        shuffleAnimations.push(
          Animated.sequence([
            // Move right
            Animated.timing(animatedValues[index], {
              toValue: 1,
              duration: 200,
              delay: randomDelay + i * 400,
              useNativeDriver: true,
              easing: Easing.inOut(Easing.ease),
            }),
            // Move left
            Animated.timing(animatedValues[index], {
              toValue: -1,
              duration: 200,
              useNativeDriver: true,
              easing: Easing.inOut(Easing.ease),
            }),
            // Return to center
            Animated.timing(animatedValues[index], {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
              easing: Easing.inOut(Easing.ease),
            }),
          ])
        );
      }
    });

    // Run all animations in parallel
    Animated.parallel(shuffleAnimations).start(() => {
      // Animation complete
      setIsShuffling(false);
      const shuffled = shuffleArray(players);
      setShuffledPlayers(shuffled);
      setIsShuffled(true);
    });
  };

  const shufflePlayers = () => {
    if (players.length >= 2 && !isShuffling) {
      animateShuffling();
    }
  };

  const reset = () => {
    Alert.alert(
      "Reset Players",
      "Are you sure you want to reset all players?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Reset",
          onPress: () => {
            setPlayers([]);
            setShuffledPlayers([]);
            setIsShuffled(false);
          },
          style: "destructive"
        }
      ]
    );
  };

  const getOrderLabel = (index) => {
    if (index === 0) return "1st";
    if (index === 1) return "2nd";
    if (index === 2) return "3rd";
    return `${index + 1}th`;
  };

  const renderPlayerItem = (player, index, isShuffledList) => {
    const animatedStyle = {
      transform: [
        {
          translateX:
            animatedValues[index]?.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [-50, 0, 50],
            }) || 0,
        },
      ],
    };

    return (
      <Animated.View key={index} style={[styles.playerRow, animatedStyle]}>
        <View style={styles.playerInfo}>
          {isShuffledList && (
            <View style={[styles.orderBadge, index === 0 && styles.firstBadge]}>
              <Text style={styles.orderText}>{getOrderLabel(index)}</Text>
            </View>
          )}
          <Text style={styles.playerText}>{player}</Text>
        </View>
        <View style={styles.rowButtons}>
          {isShuffledList && index === 0 && (
            <MaterialCommunityIcons
              name="trophy"
              size={24}
              color="#FFD700"
              style={styles.trophyIcon}
            />
          )}
          <TouchableOpacity onPress={() => removePlayer(index)}>
            <MaterialCommunityIcons
              name="close-circle"
              size={24}
              color="#FF6B6B"
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Playing Order</Text>
        <Text style={styles.subHeaderText}>
          Add players and shuffle to determine the order!
        </Text>
      </View>

      <ScrollView style={styles.playerList}>
        {isShuffled
          ? shuffledPlayers.map((player, index) =>
              renderPlayerItem(player, index, true)
            )
          : players.map((player, index) =>
              renderPlayerItem(player, index, false)
            )}
      </ScrollView>

      <View style={styles.controls}>
        {players.length >= 2 && (
          <TouchableOpacity
            style={[
              styles.button,
              styles.shuffleButton,
              isShuffling && styles.shufflingButton,
            ]}
            onPress={shufflePlayers}
            disabled={isShuffling}
          >
            <Text style={styles.buttonText}>
              {isShuffling
                ? "Shuffling..."
                : isShuffled
                ? "Shuffle Again"
                : "Shuffle Players"}
            </Text>
          </TouchableOpacity>
        )}

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.addButton]}
            onPress={() => setModalVisible(true)}
            disabled={isShuffling}
          >
            <MaterialCommunityIcons
              name="account-plus"
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              styles.resetButton,
              players.length === 0 && styles.resetButtonDisabled,
            ]}
            onPress={reset}
            disabled={players.length === 0 || isShuffling}
          >
            <MaterialCommunityIcons name="refresh" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Player</Text>
            <TextInput
              style={styles.input}
              value={newPlayer}
              onChangeText={setNewPlayer}
              placeholder="Enter player name"
              maxLength={20}
              autoFocus
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setModalVisible(false);
                  setNewPlayer("");
                }}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.addButton]}
                onPress={addPlayer}
              >
                <Text style={styles.modalButtonText}>Add</Text>
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
  headerContainer: {
    padding: 20,
    backgroundColor: "#db3171",
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  subHeaderText: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.9,
  },
  playerList: {
    flex: 1,
    padding: 20,
  },
  playerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  playerInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },
  orderBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#4CAF50",
    borderRadius: 15,
    minWidth: 45,
    alignItems: "center",
  },
  firstBadge: {
    backgroundColor: "#FFD700",
  },
  orderText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  playerText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  controls: {
    width: "100%",
    padding: 20,
    paddingBottom: 40,
    gap: 20,
    borderTopWidth: 1,
    borderTopColor: "#d0c3f1",
    backgroundColor: "#d0c3f1",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  button: {
    padding: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  shuffleButton: {
    backgroundColor: "#4CAF50",
    width: "100%",
    maxWidth: 300,
    alignSelf: "center",
    paddingVertical: 18,
  },
  addButton: {
    backgroundColor: "#2196F3",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  resetButton: {
    backgroundColor: "#FF6B6B",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  resetButtonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    maxWidth: 400,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#f8f8f8",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#FF6B6B",
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  rowButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  trophyIcon: {
    marginRight: 5,
  },
  shufflingButton: {
    opacity: 0.7,
  },
});

export default RandomSelectionScreen;
