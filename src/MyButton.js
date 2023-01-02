import React from "react";
import { Text, TouchableOpacity } from "react-native";

const MyButton = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{text}</Text>
  </TouchableOpacity>
);

export default MyButton;
