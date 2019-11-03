import React from 'react';
import { View, Text } from 'react-native';
import BusSchedules from './BusSchedules';
import BusRoute from './BusRoute';
import Contacts from './EmptyContacts';


import MainStyles from '../styles/MainStyles';

function Main(){
  return(

      <View style={MainStyles.main}>

      {/* <BusSchedules />   */}
        <Contacts />
        {/* <BusRoute /> */}

      </View>
  )
};

export default Main;