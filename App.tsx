import './gesture-handler';
import React from 'react';
import Routes from './src/routes/index.route';
import Homescreen from './src/pages/Homescreen';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import Bottomtab from './src/routes/bottom.routes';
import Treino from './src/pages/Treino';

export default function App() {
  return (
      <Treino />
  );
}
