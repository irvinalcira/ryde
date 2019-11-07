import React, {useState} from 'react';

import { View, Text } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';

//pages
import HomePage from './home/HomePage';

import BusSchedules from './bus/BusSchedules';
import BusRoute from './bus/BusRoute';
import BusLastRoute from './bus/BusLastRoute';

import SkyTrainSchedules from './skytrains/SkyTrainSchedules'
import SkyTrainStation from './skytrains/SkyTrainStation'
import SkyTrainRoute from './skytrains/SkyTrainRoute'

import EmptyContacts from './contacts/EmptyContacts';
import Contacts from './contacts/Contacts';
import AddContacts from './contacts/AddContacts';


import Taxis from './taxis/Taxis';
import SelectedTaxi from './taxis/SelectedTaxi';


function Route(){




  return(

        <Router>
        <Stack key="root" hideNavBar={true}>

              <Scene key="HomePage" component={HomePage} initial={true}/>
        
              <Scene key="BusSchedules" component={BusSchedules}/>
              <Scene key="BusRoute" component={BusRoute} />
              <Scene key="BusLastRoute" component={BusLastRoute} />

              <Scene key="SkyTrainSchedules" component={SkyTrainSchedules} />
              <Scene key="SkyTrainStation" component={SkyTrainStation} />
              <Scene key="SkyTrainRoute" component={SkyTrainRoute} />
          
              <Scene key="Taxis" component={Taxis} />
              <Scene key="SelectedTaxi" component={SelectedTaxi}/>
              
              <Scene key="EmptyContacts" component={EmptyContacts}  />
              <Scene key="Contacts" component={Contacts} />
              <Scene key="AddContacts" component={AddContacts}/>

        </Stack>
      </Router>

  )
};

export default Route;