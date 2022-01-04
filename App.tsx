import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import theme from './src/global/styles/theme';
import { Home } from './src/screens/Home';

export default function App() {

  const [fontsLoaded]  = useFonts([
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  ]);

  if(!fontsLoaded) {
    return <AppLoading />
  } else {

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
  }
}