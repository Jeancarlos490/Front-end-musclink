import './gesture-handler';
import React from 'react';
import Routes from './src/routes/index.route';
import Homescreen from './src/pages/Homescreen';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import Bottomtab from './src/routes/bottom.routes';
import Treino from './src/pages/Timer';
import TrainingSelection from './src/pages/TrainingSelection';
import TopTabs from './src/routes/top.routes';

export default function App() {
  return (
    <Routes/>
  );
}
