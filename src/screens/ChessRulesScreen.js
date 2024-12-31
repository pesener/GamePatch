import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ChessRulesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chess Rules</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objective of the Game</Text>
        <Text style={styles.text}>
          Checkmate your opponent's King by placing it under attack where it
          cannot escape.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Game Setup</Text>
        <Text style={styles.text}>
          Chessboard: 8x8 grid with alternating light and dark squares.
          {"\n\n"}Pieces: Each player starts with 16 pieces:
          {"\n"}• 1 King
          {"\n"}• 1 Queen
          {"\n"}• 2 Rooks
          {"\n"}• 2 Knights
          {"\n"}• 2 Bishops
          {"\n"}• 8 Pawns
          {"\n\n"}Initial Setup:
          {"\n"}• The second row (rank) is filled with pawns.
          {"\n"}• Rooks, Knights, and Bishops occupy the corners inward.
          {"\n"}• The Queen is placed on her matching color square (white queen
          on white, black queen on black).
          {"\n"}• The King is placed on the remaining square of the first row.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How Pieces Move</Text>
        <Text style={styles.boldText}>King:</Text>
        <Text style={styles.text}>
          • Moves 1 square in any direction.
          {"\n"}• Cannot move into check (a threatened square).
        </Text>

        <Text style={styles.boldText}>Queen:</Text>
        <Text style={styles.text}>
          • Moves any number of squares in any direction (horizontally,
          vertically, or diagonally).
        </Text>

        <Text style={styles.boldText}>Rook:</Text>
        <Text style={styles.text}>
          • Moves any number of squares horizontally or vertically.
        </Text>

        <Text style={styles.boldText}>Bishop:</Text>
        <Text style={styles.text}>
          • Moves any number of squares diagonally.
        </Text>

        <Text style={styles.boldText}>Knight:</Text>
        <Text style={styles.text}>
          • Moves in an "L" shape: 2 squares in one direction, then 1 square
          perpendicular to that.
          {"\n"}• Can jump over other pieces.
        </Text>

        <Text style={styles.boldText}>Pawn:</Text>
        <Text style={styles.text}>
          • Moves forward 1 square.
          {"\n"}• On its first move, it can move forward 2 squares.
          {"\n"}• Captures diagonally 1 square forward.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Special Moves</Text>
        <Text style={styles.boldText}>Castling:</Text>
        <Text style={styles.text}>
          A King and Rook can move simultaneously under these conditions:
          {"\n"}• Neither has moved before.
          {"\n"}• No pieces are between them.
          {"\n"}• The King is not in check, does not move through a square under
          attack, and does not land in check.
        </Text>

        <Text style={styles.boldText}>En Passant:</Text>
        <Text style={styles.text}>
          • A pawn can capture an opposing pawn that has moved 2 squares forward
          from its starting position, bypassing the square where it could have
          been captured.
          {"\n"}• Must be done immediately after the opponent's pawn moves 2
          squares forward.
        </Text>

        <Text style={styles.boldText}>Pawn Promotion:</Text>
        <Text style={styles.text}>
          • When a pawn reaches the last rank (opponent's back row), it must be
          promoted to any piece (except a King), usually a Queen.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Game Phases</Text>
        <Text style={styles.boldText}>Opening:</Text>
        <Text style={styles.text}>
          • Develop your pieces and control the center of the board.
        </Text>

        <Text style={styles.boldText}>Middle Game:</Text>
        <Text style={styles.text}>
          • Execute strategies and tactics to weaken your opponent's position.
        </Text>

        <Text style={styles.boldText}>Endgame:</Text>
        <Text style={styles.text}>
          • Focus on checkmating the King with fewer pieces.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Winning the Game</Text>
        <Text style={styles.boldText}>Checkmate:</Text>
        <Text style={styles.text}>
          • The King is under attack and has no legal move to escape.
        </Text>

        <Text style={styles.boldText}>Resignation:</Text>
        <Text style={styles.text}>
          • A player can concede defeat at any time.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Draw Conditions</Text>
        <Text style={styles.boldText}>Stalemate:</Text>
        <Text style={styles.text}>
          • The player to move has no legal moves, and the King is not in check.
        </Text>

        <Text style={styles.boldText}>Insufficient Material:</Text>
        <Text style={styles.text}>
          • Neither player has enough material to checkmate (e.g., King vs.
          King).
        </Text>

        <Text style={styles.boldText}>Threefold Repetition:</Text>
        <Text style={styles.text}>
          • The same board position occurs three times.
        </Text>

        <Text style={styles.boldText}>50-Move Rule:</Text>
        <Text style={styles.text}>
          • If no pawn move or capture occurs in 50 consecutive moves.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tips for Beginners</Text>
        <Text style={styles.text}>
          • Focus on controlling the center of the board early.
          {"\n"}• Develop all your pieces before moving the same piece multiple
          times.
          {"\n"}• Avoid unnecessary pawn moves as they can't retreat.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0c3f1",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  boldText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
});

export default ChessRulesScreen;
