import React from 'react';
import { View, Text } from 'react-native';
import BusSchedules from './BusSchedules';
import BusRoute from './BusRoute';
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