import { useState } from "react";
import { View, Text, FlatList, SafeAreaView, StatusBar, TextInput, Dimensions } from "react-native";
import MetalBandLiner from "../components/MetalBandLine";
import { metalBandsArray } from "../data/dataProcessor";
const { height, width } = Dimensions.get('screen');

export default function BandsScreen() {
  const [searchTerm, setSearchTerm] = useState('');

  let filteredBands = metalBandsArray.filter((band) => band.band_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

  return (
    <SafeAreaView style={{ backgroundColor: '#000', height: height, marginTop: StatusBar.currentHeight, alignItems: 'center' }}>
      <TextInput
        style={{backgroundColor: '#fff', padding: 14, width: width, borderRadius: 10}}
        placeholder="Search"
        onChangeText={setSearchTerm}
        value={searchTerm}
      />
      <FlatList
        data={filteredBands}
        renderItem={({ item, index, separators }) => {
          return <MetalBandLiner
            key={item.id}
            bandName={item.band_name}
            formedYear={item.formed}
            origin={item.origin}
            fansCount={item.fans}
            splitYear={item.split}
          />
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
