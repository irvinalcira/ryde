import React from 'react';
import { View, Text } from 'react-native';
import BusSchedules from './bus/BusSchedules';
import BusRoute from './bus/BusRoute';
import EmptyContacts from './contacts/EmptyContacts';
import Contacts from './contacts/Contacts';
import AddContacts from './contacts/AddContacts';
import BusLastRoute from './bus/BusLastRoute';
import Taxis from './taxis/Taxis';
import SelectedTaxi from './taxis/SelectedTaxi';


import MainStyles from '../styles/MainStyles';

function Main(){
  return(

      <View style={MainStyles.main}>

        {/* <BusSchedules />   */}
        {/* <BusRoute /> */}
        {/* <BusLastRoute /> */}

        {/* <EmptyContacts /> */}
        {/* <Contacts /> */}
        <AddContacts />

        {/* <Taxis /> */}
        {/* <SelectedTaxi /> */}

      </View>
  )
};

export default Main;