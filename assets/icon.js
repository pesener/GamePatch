import React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Circle,
  Text,
  Path,
} from "react-native-svg";

export const AppIcon = ({ size = 1024 }) => (
  <Svg width={size} height={size} viewBox="0 0 1024 1024">
    <Defs>
      <LinearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor="#FF6B6B" />
        <Stop offset="50%" stopColor="#4ECDC4" />
        <Stop offset="100%" stopColor="#45B7D1" />
      </LinearGradient>
      <LinearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor="#FFD93D" />
        <Stop offset="100%" stopColor="#FF9A3D" />
      </LinearGradient>
    </Defs>

    {/* Background */}
    <Circle cx="512" cy="512" r="512" fill="url(#bgGradient)" />

    {/* Decorative elements */}
    <Circle
      cx="512"
      cy="512"
      r="450"
      fill="none"
      stroke="#ffffff"
      strokeWidth="20"
      opacity="0.3"
    />

    {/* Playful elements */}
    <Path
      d="M200,512 A312,312 0 1,1 824,512"
      fill="none"
      stroke="#ffffff"
      strokeWidth="25"
      strokeLinecap="round"
      opacity="0.4"
    />

    {/* Stars */}
    {[45, 135, 225, 315].map((angle, i) => {
      const x = 512 + 380 * Math.cos((angle * Math.PI) / 180);
      const y = 512 + 380 * Math.sin((angle * Math.PI) / 180);
      return (
        <Path
          key={i}
          d={`M${x},${y - 20} L${x + 10},${y - 5} L${x + 25},${y - 10} L${
            x + 15
          },${y + 5} L${x + 20},${y + 20} L${x},${y + 10} L${x - 20},${
            y + 20
          } L${x - 15},${y + 5} L${x - 25},${y - 10} L${x - 10},${y - 5} Z`}
          fill="#FFD93D"
          opacity="0.9"
        />
      );
    })}

    {/* Text "Game" */}
    <Text
      x="512"
      y="460"
      fontSize="140"
      fontWeight="bold"
      fill="url(#textGradient)"
      textAnchor="middle"
      fontFamily="Arial-BoldMT"
    >
      GAME
    </Text>

    {/* Text "Patch" */}
    <Text
      x="512"
      y="600"
      fontSize="160"
      fontWeight="bold"
      fill="#ffffff"
      textAnchor="middle"
      fontFamily="Arial-BoldMT"
    >
      PATCH
    </Text>
  </Svg>
);

export default AppIcon;
