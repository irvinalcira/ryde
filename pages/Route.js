import React from 'react';

import { View, Text } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';

//pages
import BusSchedules from './bus/BusSchedules';
import BusRoute from './bus/BusRoute';
import BusLastRoute from './bus/BusLastRoute';

import EmptyContacts from './contacts/EmptyContacts';
import Contacts from './contacts/Contacts';
import AddContacts from './contacts/AddContacts';


import Taxis from './taxis/Taxis';
import SelectedTaxi from './taxis/SelectedTaxi';


function Route(){
  return(

        <Router>
        <Stack key="root" hideNavBar={true}>


              <Scene key="EmptyContacts" component={EmptyContacts}/>
              <Scene key="Contacts" component={Contacts}/>
              <Scene key="AddContacts" component={AddContacts}/>
          
              <Scene key="Taxis" component={Taxis} initial={true}/>
              <Scene key="SelectedTaxi" component={SelectedTaxi}/>
              
        </Stack>
      </Router>

  )
};

export default Route;