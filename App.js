import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DiceScreen from "./src/screens/DiceScreen";
import CoinScreen from "./src/screens/CoinScreen";
import WheelScreen from "./src/screens/WheelScreen";
import RandomSelectionScreen from "./src/screens/RandomSelectionScreen";
import TwisterSpinnerScreen from "./src/screens/TwisterSpinnerScreen";
import GameRulesScreen from "./src/screens/GameRulesScreen";
import ClassicBoardGamesScreen from "./src/screens/ClassicBoardGamesScreen";
import ChessRulesScreen from "./src/screens/ChessRulesScreen";
import MonopolyRulesScreen from "./src/screens/MonopolyRulesScreen";
import ScrabbleRulesScreen from "./src/screens/ScrabbleRulesScreen";
import BackgammonRulesScreen from "./src/screens/BackgammonRulesScreen";
import CardGamesScreen from "./src/screens/CardGamesScreen";
import PokerRulesScreen from "./src/screens/PokerRulesScreen";
import BridgeRulesScreen from "./src/screens/BridgeRulesScreen";
import UnoRulesScreen from "./src/screens/UnoRulesScreen";
import SolitaireRulesScreen from "./src/screens/SolitaireRulesScreen";
import CheckersRulesScreen from "./src/screens/CheckersRulesScreen";
import ScoresScreen from "./src/screens/ScoresScreen";
import PartyGamesScreen from "./src/screens/PartyGamesScreen";
import TwisterScreen from "./src/screens/TwisterScreen";
import PictionaryRulesScreen from "./src/screens/PictionaryRulesScreen";
import NeverHaveIEverScreen from "./src/screens/NeverHaveIEverScreen";
import CharadesScreen from "./src/screens/CharadesScreen";
import TruthOrDareScreen from "./src/screens/TruthOrDareScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#db3171",
          },
          headerTintColor: "#333",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dice"
          component={DiceScreen}
          options={{
            title: "Dice Roller",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Coin"
          component={CoinScreen}
          options={{
            title: "Coin Flip",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Wheel"
          component={WheelScreen}
          options={{
            title: "Spin the Wheel",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="RandomSelection"
          component={RandomSelectionScreen}
          options={{
            title: "Who Goes First?",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="TwisterSpinner"
          component={TwisterSpinnerScreen}
          options={{
            title: "Twister Spinner",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Twister"
          component={TwisterScreen}
          options={{
            title: "Twister",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Pictionary"
          component={PictionaryRulesScreen}
          options={{
            title: "Pictionary",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="NeverHaveIEver"
          component={NeverHaveIEverScreen}
          options={{
            title: "Never Have I Ever",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Charades"
          component={CharadesScreen}
          options={{
            title: "Charades",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="TruthOrDare"
          component={TruthOrDareScreen}
          options={{
            title: "Truth or Dare",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="GameRules"
          component={GameRulesScreen}
          options={{
            title: "Game Rules",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="ClassicBoardGames"
          component={ClassicBoardGamesScreen}
          options={{
            title: "Classic Board Games",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="ChessRules"
          component={ChessRulesScreen}
          options={{
            title: "Chess Rules",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="MonopolyRules"
          component={MonopolyRulesScreen}
          options={{
            title: "Monopoly Rules",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="ScrabbleRules"
          component={ScrabbleRulesScreen}
          options={{
            title: "Scrabble Rules",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="BackgammonRules"
          component={BackgammonRulesScreen}
          options={{
            title: "Backgammon Rules",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="CardGames"
          component={CardGamesScreen}
          options={{
            title: "Card Games",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="PokerRules"
          component={PokerRulesScreen}
          options={{
            title: "Poker Rules",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="BridgeRules"
          component={BridgeRulesScreen}
          options={{
            title: "Bridge Rules",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="UnoRules"
          component={UnoRulesScreen}
          options={{
            title: "UNO Rules",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="SolitaireRules"
          component={SolitaireRulesScreen}
          options={{
            title: "Solitaire Rules",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="CheckersRules"
          component={CheckersRulesScreen}
          options={{
            title: "Checkers Rules",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Scores"
          component={ScoresScreen}
          options={{
            title: "Game Scores",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="PartyGames"
          component={PartyGamesScreen}
          options={{
            title: "Party Games",
            headerStyle: {
              backgroundColor: "#db3171",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
