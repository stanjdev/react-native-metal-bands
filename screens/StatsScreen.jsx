import { View, Text } from "react-native";
import { metalBandsArray } from "../data/dataProcessor";
import { globalStyles } from "../styles/styles";

const totalBands = metalBandsArray.length;
const fans = (metalBandsArray.map((band) => band.fans).reduce((a, b) => a + b) * 1000).toLocaleString();
const countries = [...new Set(metalBandsArray.map((band) => band.origin))].length;
const active = metalBandsArray.filter((band) => band.split === '-').length;
const split = metalBandsArray.filter((band) => band.split !== '-').length;
const styles = [...new Set(metalBandsArray.map((band) => band.style))].length;

export default function StatsScreen() {
  return (
    <View style={{ backgroundColor: '#000', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={[globalStyles.fontStyle, {fontSize: 30, fontWeight: 'bold', marginBottom: 5}]}>METAL 🤘</Text>
      <Text style={[globalStyles.fontStyle, globalStyles.fontStatsTitles]}>Count: <Text style={{fontWeight: 'normal'}}>{totalBands}</Text></Text>
      <Text style={[globalStyles.fontStyle, globalStyles.fontStatsTitles]}>Fans: <Text style={{fontWeight: 'normal'}}>{fans}</Text></Text>
      <Text style={[globalStyles.fontStyle, globalStyles.fontStatsTitles]}>Countries: <Text style={{fontWeight: 'normal'}}>{countries}</Text></Text>
      <Text style={[globalStyles.fontStyle, globalStyles.fontStatsTitles]}>Active: <Text style={{fontWeight: 'normal'}}>{active}</Text></Text>
      <Text style={[globalStyles.fontStyle, globalStyles.fontStatsTitles]}>Split: <Text style={{fontWeight: 'normal'}}>{split}</Text></Text>
      <Text style={[globalStyles.fontStyle, globalStyles.fontStatsTitles]}>Styles: <Text style={{fontWeight: 'normal'}}>{styles}</Text></Text>
    </View>
  );
}
