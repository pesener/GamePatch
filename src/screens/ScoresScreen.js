import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@game_scores_data';

const ScoresScreen = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState("");
  const [rounds, setRounds] = useState([]);
  const [currentRound, setCurrentRound] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [tempScores, setTempScores] = useState({});
  const [editingRound, setEditingRound] = useState(null);

  // Load saved data when component mounts
  useEffect(() => {
    loadData();
  }, []);

  // Save data whenever players or rounds change
  useEffect(() => {
    saveData();
  }, [players, rounds, currentRound]);

  const loadData = async () => {
    try {
      const savedData = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const { savedPlayers, savedRounds, savedCurrentRound } = JSON.parse(savedData);
        setPlayers(savedPlayers);
        setRounds(savedRounds);
        setCurrentRound(savedCurrentRound);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const saveData = async () => {
    try {
      const dataToSave = {
        savedPlayers: players,
        savedRounds: rounds,
        savedCurrentRound: currentRound,
      };
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const addPlayer = () => {
    if (newPlayer.trim() === "") {
      Alert.alert("Error", "Please enter a player name");
      return;
    }
    if (players.includes(newPlayer.trim())) {
      Alert.alert("Error", "Player already exists");
      return;
    }
    setPlayers([...players, newPlayer.trim()]);
    setNewPlayer("");
  };

  const openNewRoundModal = () => {
    const initialScores = {};
    players.forEach((player) => {
      initialScores[player] = "";
    });
    setTempScores(initialScores);
    setEditingRound(null);
    setModalVisible(true);
  };

  const openEditRoundModal = (roundIndex) => {
    const roundScores = {};
    players.forEach((player) => {
      roundScores[player] = rounds[roundIndex].scores[player]?.toString() || "";
    });
    setTempScores(roundScores);
    setEditingRound(roundIndex);
    setModalVisible(true);
  };

  const handleScoreSubmit = () => {
    // Validate that all scores are numbers or empty
    const scores = {};
    let hasValidScore = false;

    for (const [player, score] of Object.entries(tempScores)) {
      if (score.trim() === "") {
        scores[player] = 0; // Set empty scores to 0
      } else {
        const numberScore = Number(score);
        if (isNaN(numberScore)) {
          Alert.alert("Error", "Please enter valid numbers for scores");
          return;
        }
        scores[player] = numberScore;
        hasValidScore = true;
      }
    }

    if (!hasValidScore) {
      Alert.alert("Error", "Please enter at least one score");
      return;
    }

    if (editingRound !== null) {
      // Update existing round
      const updatedRounds = [...rounds];
      updatedRounds[editingRound] = {
        ...updatedRounds[editingRound],
        scores: scores,
      };
      setRounds(updatedRounds);
    } else {
      // Add new round
      const newRound = {
        roundNumber: currentRound,
        scores: scores,
      };
      setRounds([...rounds, newRound]);
      setCurrentRound(currentRound + 1);
    }

    setModalVisible(false);
    setTempScores({});
    setEditingRound(null);
  };

  const getTotalScore = (player) => {
    return rounds.reduce((total, round) => {
      return total + (round.scores[player] || 0);
    }, 0);
  };

  const resetSheet = () => {
    Alert.alert(
      "Reset Score Sheet",
      "Are you sure you want to reset? This will clear all players and scores.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Reset",
          onPress: async () => {
            try {
              await AsyncStorage.removeItem(STORAGE_KEY);
              setPlayers([]);
              setRounds([]);
              setCurrentRound(1);
              setNewPlayer("");
              setTempScores({});
              setEditingRound(null);
            } catch (error) {
              console.error('Error clearing data:', error);
            }
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {players.length === 0 && (
        <View style={styles.infoContainer}>
          <MaterialCommunityIcons
            name="information"
            size={30}
            color="#2196F3"
          />
          <Text style={styles.infoText}>
            Welcome to Score Sheet! {"\n\n"}
            To get started:{"\n"}
            1. Add player names using the input below{"\n"}
            2. Click "New Round" to enter scores{"\n"}
            3. Track your game progress round by round
          </Text>
        </View>
      )}
      <View style={styles.addPlayerContainer}>
        <TextInput
          style={styles.input}
          value={newPlayer}
          onChangeText={setNewPlayer}
          placeholder="Enter player name"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.addButton} onPress={addPlayer}>
          <Text style={styles.addButtonText}>Add Player</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        {players.length > 0 && (
          <>
            <TouchableOpacity
              style={styles.newRoundButton}
              onPress={openNewRoundModal}
            >
              <Text style={styles.newRoundButtonText}>New Round</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resetButton} onPress={resetSheet}>
              <Text style={styles.resetButtonText}>Reset Sheet</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <ScrollView style={styles.scoreSheet}>
        {/* Header Row */}
        <View style={styles.row}>
          <View style={styles.roundCell}>
            <Text style={styles.headerText}>Round</Text>
          </View>
          {players.map((player, index) => (
            <View key={index} style={styles.playerCell}>
              <Text style={styles.headerText}>{player}</Text>
            </View>
          ))}
        </View>

        {/* Score Rows */}
        {rounds.map((round, roundIndex) => (
          <TouchableOpacity
            key={roundIndex}
            style={styles.row}
            onPress={() => openEditRoundModal(roundIndex)}
          >
            <View style={styles.roundCell}>
              <View style={styles.roundNumberContainer}>
                <Text style={styles.roundText}>{round.roundNumber}</Text>
                <TouchableOpacity
                  onPress={() => openEditRoundModal(roundIndex)}
                  style={styles.editButton}
                >
                  <MaterialCommunityIcons
                    name="pencil"
                    size={16}
                    color="#2196F3"
                  />
                </TouchableOpacity>
              </View>
            </View>
            {players.map((player, playerIndex) => (
              <View key={playerIndex} style={styles.scoreCell}>
                <Text style={styles.scoreText}>{round.scores[player]}</Text>
              </View>
            ))}
          </TouchableOpacity>
        ))}

        {/* Total Row */}
        {players.length > 0 && (
          <View style={[styles.row, styles.totalRow]}>
            <View style={styles.roundCell}>
              <Text style={styles.totalText}>Total</Text>
            </View>
            {players.map((player, index) => (
              <View key={index} style={styles.playerCell}>
                <Text style={styles.totalText}>{getTotalScore(player)}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Score Input Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {editingRound !== null
                ? "Edit Round Scores"
                : "Enter Round Scores"}
            </Text>
            <ScrollView style={styles.modalScroll}>
              {players.map((player, index) => (
                <View key={index} style={styles.modalInputContainer}>
                  <Text style={styles.modalPlayerName}>{player}</Text>
                  <TextInput
                    style={styles.modalInput}
                    value={tempScores[player]}
                    onChangeText={(text) =>
                      setTempScores({ ...tempScores, [player]: text })
                    }
                    keyboardType="numeric"
                    placeholder="Enter score"
                    placeholderTextColor="#999"
                  />
                </View>
              ))}
            </ScrollView>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.submitButton]}
                onPress={handleScoreSubmit}
              >
                <Text style={styles.modalButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0c3f1",
  },
  addPlayerContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#db3171",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#db3171",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: "white",
  },
  addButton: {
    backgroundColor: "#db3171",
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  newRoundButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  resetButton: {
    backgroundColor: "#db3171",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  newRoundButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  resetButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  scoreSheet: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#db3171",
  },
  roundCell: {
    width: 80,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  playerCell: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreCell: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 12,
    color: "black",
  },
  roundText: {
    fontSize: 14,
  },
  scoreText: {
    fontSize: 14,
  },
  totalRow: {
    backgroundColor: "#f8f8f8",
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  roundNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  editButton: {
    padding: 3,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 12,
    padding: 20,
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  modalScroll: {
    maxHeight: "70%",
  },
  modalInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  modalPlayerName: {
    flex: 1,
    fontSize: 16,
  },
  modalInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "#db3171",
  },
  submitButton: {
    backgroundColor: "#4CAF50",
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  infoContainer: {
    backgroundColor: "#E3F2FD",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  infoText: {
    flex: 1,
    marginLeft: 10,
    color: "#1976D2",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default ScoresScreen;
