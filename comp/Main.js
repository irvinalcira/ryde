import React from 'react';
import { View, Text } from 'react-native';
import BusSchedules from './buschedules';
import styles from '../styles/mainstyles';

function Main(){
  return(

      <View style={styles.main}>
        <BusSchedules />
      </View>
  )
};

export default Main;