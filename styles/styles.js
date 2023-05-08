import { StyleSheet, Dimensions } from "react-native";
const {width} = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
  metalBandLinerContainer: {
    backgroundColor: '#000',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 10,
    width: width * 0.95,
  },
  fontStyle: {
    color: 'white',
  },
  fontStatsTitles:  {
    fontWeight: 'bold',
    marginBottom: 7,
    fontSize: 18,
  }
});

