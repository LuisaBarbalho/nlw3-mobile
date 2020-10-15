import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'

import mapMarker from './src/images/map-marker.png';

import Routes from './src/routes';

export default function App() {

  // fontsLoaded vai retornar true ou false se as fontes estão carregadas ou não
  const[fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  // Mostrar tela branca enquanto está carregando as fontes
  if(!fontsLoaded) {
    return null;
  }
  

  return (
    <Routes />
  );
}

