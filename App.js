import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'

import BandsScreen from './screens/BandsScreen';
import StatsScreen from './screens/StatsScreen';
import StylesScreen from './screens/StylesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={{backgroundColor: '#000'}}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Bands') {
              iconName = focused ? 'radio' : 'radio-outline';
            } else if (route.name === 'Stats') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (route.name === 'Styles') {
              iconName = focused ? 'musical-note' : 'musical-note-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000'
          },
          tabBarActiveTintColor: '#f00',
          tabBarInactiveTintColor: '#600',
          tabBarActiveBackgroundColor: '#111',
          tabBarInactiveBackgroundColor: '#000'
        })}
      >
        <Tab.Screen name="Bands" component={BandsScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
        <Tab.Screen name="Styles" component={StylesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
