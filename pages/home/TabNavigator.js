import React from 'react';
import { View, Text } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import FavBus from './FavBus';
import FavTrain from './FavTrain';
import FavTaxi from './FavTaxi';

const TabNavigator = createBottomTabNavigator({
  FavoriteBus: FavBus,
  FavoriteTrain: FavTrain,
  FavoriteTaxi: FavTaxi
});

export default TabNavigator;