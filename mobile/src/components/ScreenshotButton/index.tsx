import { Trash, Camera } from "phosphor-react-native";
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { theme } from "../../theme";
import { styles } from "./styles";

type ScreenshotButtonProps = {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
};

export function ScreenshotButton({
  screenshot,
  onTakeShot,
  onRemoveShot,
}: ScreenshotButtonProps) {
  const handleScreenshot = () => {
    return screenshot ? onRemoveShot() : onTakeShot();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleScreenshot()}
    >
      {screenshot ? (
        <View>
          <Image style={styles.backgroundImage} source={{ uri: screenshot }} />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_secondary} weight="bold" />
      )}
    </TouchableOpacity>
  );
}
