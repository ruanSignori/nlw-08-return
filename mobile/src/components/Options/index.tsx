import React from "react";
import { View, Text } from "react-native";

import { FeedbackType, feedbackTypes } from "../../utils/feedbackTypes";
import { Copyright } from "../Copyright";
import { TypeFeedback } from "../TypeFeedback";
import { styles } from "./styles";

type OptionsProps = {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
};

export function Options({ onFeedbackTypeChanged }: OptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, { title, image }]) => (
          <TypeFeedback
            key={key}
            title={title}
            image={image}
            onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
