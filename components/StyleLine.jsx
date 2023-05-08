import { View, Text } from "react-native";
import { globalStyles } from "../styles/styles";

export default function StyleLine({styleName}) {
  return (
    <View style={globalStyles.metalBandLinerContainer}>
      <Text style={[globalStyles.fontStyle, {fontWeight: 'bold'}]}>{styleName}</Text>
    </View>
  );
};
