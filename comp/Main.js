import React from 'react';
import { View, Text } from 'react-native';
import BusSchedules from './buschedules';
import BusRoute from './busroute';
import styles from '../styles/mainstyles';

function Main(){
  return(

      <View style={styles.main}>
        {/* <BusSchedules /> */}
        <BusRoute />
      </View>
  )
};

export default Main;