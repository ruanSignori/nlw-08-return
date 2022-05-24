import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import sucessImg from "../../assets/success.png";
import { Copyright } from "../Copyright";
import { styles } from "./styles";

type SuccessProps = {
  onSendAnotherFeedback: () => void;
};

export function Success({ onSendAnotherFeedback }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image source={sucessImg} style={styles.image} />
      <Text style={styles.titleSucess}>Agradecemos o feedback</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onSendAnotherFeedback()}
      >
        <Text style={styles.titleButton}>Quero enviar outro</Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}
