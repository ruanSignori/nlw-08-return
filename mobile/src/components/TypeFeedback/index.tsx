/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageSourcePropType,
  Text,
} from "react-native";

import { styles } from "./styles";

type TypeFeedbackProps = {
  title: string;
  image: ImageSourcePropType;
} & TouchableOpacityProps;

export function TypeFeedback({ title, image, ...rest }: TypeFeedbackProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
