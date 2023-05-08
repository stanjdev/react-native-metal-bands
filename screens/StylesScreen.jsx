import { SafeAreaView, StatusBar, FlatList, Text, View } from "react-native"
import { metalBandsArray } from "../data/dataProcessor"
import StyleLine from "../components/StyleLine";

// go through all, split by comma, put into new array, and new Set that.
const allStyles = [];
metalBandsArray.forEach((band) => {
  splitArr = band.style.split(',');
  allStyles.push(...splitArr);
})

const uniqueStyles = [...new Set(allStyles)].sort((a, b) => a.localeCompare(b));

export default function StylesScreen() {
  return(
    <SafeAreaView style={{ backgroundColor: '#000', marginTop: StatusBar.currentHeight, alignItems: 'center' }}>
      <FlatList
        data={uniqueStyles}
        renderItem={({ item, index, separators }) => {
          return <StyleLine styleName={item} key={item} />
        }}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
  )
}
