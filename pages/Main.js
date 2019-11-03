import React from 'react';
import { View, Text } from 'react-native';
import BusSchedules from './BusSchedules';
import BusRoute from './BusRoute';
import EmptyContacts from './EmptyContacts';
import Contacts from './Contacts';


import MainStyles from '../styles/MainStyles';

function Main(){
  return(

      <View style={MainStyles.main}>

      {/* <BusSchedules />   */}
        {/* <EmptyContacts /> */}
        <Contacts />
        {/* <BusRoute /> */}

      </View>
  )
};

export default Main;