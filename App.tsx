/**
 * Minimal react native app.
 * @format
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';


import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function BoneScreen() {
  return <View>
    <Text>Bone Screen</Text>
  </View>;
}
const RootStack = createNativeStackNavigator({
  initialRouteName: 'Bone',
  screens: {
    Bone: BoneScreen,
  },
});
const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}


