import React from 'react';
import { View, Text } from 'react-native';
import BusSchedules from './BusSchedules';
import BusRoute from './BusRoute';
import EmptyContacts from './EmptyContacts';
import Contacts from './Contacts';
import AddContacts from './AddContacts';
import BusLastRoute from './BusLastRoute';
import Taxis from './Taxis';
import SelectedTaxi from './SelectedTaxi';


import MainStyles from '../styles/MainStyles';

function Main(){
  return(

      <View style={MainStyles.main}>

        {/* <BusSchedules />   */}
        {/* <BusRoute /> */}
        {/* <BusSchedules />=]\a */}
        {/* <BusSchedules />   */}
        {/* <BusRoute /> */}
        {/* <BusLastRoute /> */}

        <EmptyContacts />
        {/* <Contacts /> */}
        {/* <AddContacts /> */}

        {/* <Taxis /> */}
        {/* <SelectedTaxi /> */}

      </View>
  )
};

export default Main;