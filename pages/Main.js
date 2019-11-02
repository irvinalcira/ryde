import React from 'react';
import { View, Text } from 'react-native';
import BusSchedules from './BusSchedules';
import BusRoute from './BusRoute';
import Contacts from './Contacts';
import BusLastRoute from './BusLastRoute';


import MainStyles from '../styles/MainStyles';

function Main(){
  return(

      <View style={MainStyles.main}>

        {/* <BusSchedules /> */}
        {/* <Contacts /> */}
        {/* <BusRoute /> */}
        <BusLastRoute />

      </View>
  )
};

export default Main;