import React from 'react';
import { View, SafeAreaView, Text, TextInput,TouchableOpacity, Image } from 'react-native'

import BusSchedulesStyles from '../../styles/bus/BusSchedulesStyles';

function BusSchedules(){
  return(
      <SafeAreaView style={BusSchedulesStyles.BusStyles}>
          <View style={[BusSchedulesStyles.BusStyles]}>
           <Text style={BusSchedulesStyles.BusSchedFont}>Bus Schedules</Text>
           <Text style={BusSchedulesStyles.FindBusFont}>Find A Bus</Text>
           <Text style={BusSchedulesStyles.SearchBusFont}>Search for a Bus to see it's full route</Text>
           <TextInput
           style={BusSchedulesStyles.SecondView}
           placeholder="Enter Bus Name"
           />
            <Image
          style={BusSchedulesStyles.ImageStyle}
          source={require('../../assets/icons/search.png')}
          />
             <TouchableOpacity style={BusSchedulesStyles.FirstButton}>
               <Text style={BusSchedulesStyles.FirstButtonTxt}>View All Bus Routes</Text>
           </TouchableOpacity>
           <Text style={BusSchedulesStyles.ViewBusFont}>View Bus Departures in Real-Time</Text>
           <Text style={BusSchedulesStyles.TypeInFont}>Type in a Bus route number to view when the next bus comes</Text>
           <TextInput
           style={BusSchedulesStyles.ThirdView}
           placeholder="Enter Bus Stop Number (IE:#60432)"
           />
               <Image
          style={BusSchedulesStyles.ImageStyle}
          source={require('../../assets/icons/search.png')}
          />
           <TouchableOpacity style={BusSchedulesStyles.SecondButton}>
               <Text style={BusSchedulesStyles.SecondButtonTxt}>Find Bus</Text>
           </TouchableOpacity>
           </View>
  
      </SafeAreaView>
  )
};

export default BusSchedules;