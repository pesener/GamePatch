import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Rect, Text as SvgText } from "react-native-svg";

const AppIcon = ({ size = 1024 }) => (
  <Svg width={size} height={size} viewBox="0 0 1024 1024">
    {/* Background */}
    <Rect width="1024" height="1024" fill="#ffffff" />

    {/* Text */}
    <SvgText
      x="512"
      y="512"
      fontSize="120"
      fontWeight="bold"
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="rgba(0, 0, 0, 0.7)"
      transform="rotate(-30, 512, 512)"
    >
      GamePatch
    </SvgText>
  </Svg>
);

export default AppIcon;
