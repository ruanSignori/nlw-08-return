import * as FileSystem from "expo-file-system";
import { ArrowLeft } from "phosphor-react-native";
import React, { useState } from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { captureScreen } from "react-native-view-shot";

import { api } from "../../libs/api";
import { theme } from "../../theme";
import { FeedbackType, feedbackTypes } from "../../utils/feedbackTypes";
import { ButtonSubmit } from "../ButtonSubmit";
import { ScreenshotButton } from "../ScreenshotButton";
import { styles } from "./styles";

type FormProps = {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
};

export function Form({
  feedbackType,
  onFeedbackCanceled,
  onFeedbackSent,
}: FormProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [comment, setComment] = useState("");

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const handleScreenshotRemove = () => {
    setScreenshot(null);
  };

  const handleScreenshot = async () => {
    const screenCaptured = await captureScreen({
      format: "jpg",
      quality: 0.8,
    });

    if (!screenCaptured) {
      throw new Error("Unable to take screenshot");
    }

    setScreenshot(screenCaptured);
  };

  const handleSendFeedback = async () => {
    if (isSendingFeedback) return;

    setIsSendingFeedback(true);
    const screenshotBase64 =
      screenshot &&
      (await FileSystem.readAsStringAsync(screenshot, { encoding: "base64" }));

    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment,
      });

      onFeedbackSent();
    } catch (e) {
      console.log(e);
      setIsSendingFeedback(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onFeedbackCanceled()}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={setComment}
        multiline
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={() => handleScreenshot()}
          onRemoveShot={() => handleScreenshotRemove()}
          screenshot={screenshot}
        />
        <ButtonSubmit
          isLoading={isSendingFeedback}
          onPress={() => handleSendFeedback()}
        />
      </View>
    </View>
  );
}
