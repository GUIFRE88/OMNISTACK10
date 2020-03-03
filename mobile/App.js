import React from 'react';

import { StatusBar, YellowBox } from 'react-native'

import Routes from './src/routes'

// Retira mensagem de erro da tela. 
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
    <Routes />
    </>
  );
}
