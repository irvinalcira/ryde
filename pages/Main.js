import React from 'react';
import { View, Text } from 'react-native';
import BusSchedules from './BusSchedules';
import BusRoute from './BusRoute';
import EmptyContacts from './EmptyContacts';
import Contacts from './Contacts';
import AddContacts from './AddContacts';
import BusLastRoute from './BusLastRoute';


import MainStyles from '../styles/MainStyles';

function Main(){
  return(

      <View style={MainStyles.main}>

      {/* <BusSchedules />   */}
        <EmptyContacts />
        {/* <Contacts /> */}
        {/* <AddContacts /> */}
        {/* <BusRoute /> */}
        {/* <BusSchedules />=]\a */}
        {/* <BusRoute /> */}
        {/* <BusLastRoute /> */}

      </View>
  )
};

export default Main;