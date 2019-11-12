import React from 'react';

import { View, SafeAreaView, Text, TextInput,TouchableOpacity, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';


import BusSchedulesStyles from '../../styles/bus/BusSchedulesStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

function BusSchedules(){
  return(
      <SafeAreaView style={BusSchedulesStyles.Container}>
          <View style={[BusSchedulesStyles.Container]}>
           <Text style={Fonts.Title}>Bus Schedules</Text>
           <Text style={Fonts.Heading}>Find A Bus</Text>
           <Text style={Fonts.Body}>Search for a bus to see its full route</Text>
           <TextInput
           style={Fonts.Inp}
           placeholder="Enter Bus Name"
           placeholderTextColor='gray'
           />


          <TouchableOpacity style={Buttons.Main} onPress={() => Actions.BusRoute()}>
            <Text style={Buttons.MainText}>View All Bus Routes</Text>
          </TouchableOpacity>
          <Text style={Fonts.Heading}>View Bus Departures in Real-Time</Text>
          <Text style={Fonts.Body}>Enter a bus route number to view the next bus</Text>
          <TextInput
          style={Fonts.Inp}
          placeholder="Enter Bus Stop Number (IE:#60432)"
          placeholderTextColor='gray'
          
          />
          <TouchableOpacity style={Buttons.Alt}>
             <Text style={Buttons.MainText}>Find Bus</Text>
          </TouchableOpacity>
           </View>
           

      </SafeAreaView>
  )
};

export default BusSchedules;