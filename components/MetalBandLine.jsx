import { View, Text } from 'react-native';
import { globalStyles } from '../styles/styles';

export default function MetalBandLiner({bandName, formedYear, origin, fansCount, splitYear}) {
  return (
    <View style={globalStyles.metalBandLinerContainer}>
      <View>
        <Text style={[globalStyles.fontStyle, { color: splitYear !== '-' ? '#666' : '#fff', fontSize: 18, fontWeight: 'bold', textDecorationLine: splitYear !== '-' ? 'line-through' : 'none' }]}>{bandName}</Text>
        <Text style={globalStyles.fontStyle}>{formedYear}</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 18, color: '#999' }}>{origin}</Text>
        <Text style={globalStyles.fontStyle}>{(fansCount * 1000).toLocaleString()}</Text>
      </View>
    </View>
  )
}
