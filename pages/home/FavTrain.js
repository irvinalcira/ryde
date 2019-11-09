import React from 'react';
import {
  Text,
  View
} from 'react-native';

import HomePageStyles from '../../styles/home/HomePageStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

export default function FavTrain(){
  return(
    <View style={HomePageStyles.CompTextBox}>
          <Text>
            Start by adding your favorite SkyTrain Station for quick access on the Home Page. You can edit, add, or remove favorites anytime.
          </Text>
    </View>
  )
};