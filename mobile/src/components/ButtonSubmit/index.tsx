/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";

import { theme } from "../../theme";
import { styles } from "./styles";

type ButtonSubmitProps = {
  isLoading: boolean;
} & TouchableOpacityProps;

export function ButtonSubmit({ isLoading, ...rest }: ButtonSubmitProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={styles.titleButton}>Enviar Feedback</Text>
      )}
    </TouchableOpacity>
  );
}
