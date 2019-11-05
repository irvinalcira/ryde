import React from 'react';

import { View, SafeAreaView, Text, TextInput,TouchableOpacity, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';


import BusSchedulesStyles from '../../styles/bus/BusSchedulesStyles';
import Fonts from '../../styles/FontsStyles';

function BusSchedules(){
  return(
      <SafeAreaView style={BusSchedulesStyles.BusStyles}>
          <View style={[BusSchedulesStyles.BusStyles]}>
           <Text style={Fonts.Title}>Bus Schedules</Text>
           <Text style={Fonts.Heading}>Find A Bus</Text>
           <Text style={Fonts.Body}>Search for a Bus to see it's full route</Text>
           <TextInput
           style={Fonts.Inp}
           placeholder="Enter Bus Name"
           />

  
          <TouchableOpacity style={BusSchedulesStyles.FirstButton}>
            <Text style={BusSchedulesStyles.FirstButtonTxt}>View All Bus Routes</Text>
          </TouchableOpacity>


           <Text style={Fonts.Heading}>View Bus Departures in Real-Time</Text>
           <Text style={Fonts.Body}>Enter route number to view when the next bus comes</Text>

            <Image
          style={BusSchedulesStyles.ImageStyle}
          source={require('../../assets/icons/search.png')}
          />
             <TouchableOpacity style={BusSchedulesStyles.FirstButton} onPress={() => Actions.BusRoute()}>
               <Text style={BusSchedulesStyles.FirstButtonTxt}>View All Bus Routes</Text>
           </TouchableOpacity>
           <Text style={BusSchedulesStyles.ViewBusFont}>View Bus Departures in Real-Time</Text>
           <Text style={BusSchedulesStyles.TypeInFont}>Type in a Bus route number to view when the next bus comes</Text>

           <TextInput
           style={Fonts.Inp}
           placeholder="Enter Bus Stop Number (IE:#60432)"
           />


           <TouchableOpacity style={BusSchedulesStyles.SecondButton}>
              <Text style={BusSchedulesStyles.SecondButtonTxt}>Find Bus</Text>

               <Image
          style={BusSchedulesStyles.ImageStyle}
          source={require('../../assets/icons/search.png')}
          />
           <TouchableOpacity style={BusSchedulesStyles.SecondButton} onPress={() => Actions.BusLastRoute()}>
               <Text style={BusSchedulesStyles.SecondButtonTxt}>Find Bus</Text>

           </TouchableOpacity>
           </View>

      </SafeAreaView>
  )
};

export default BusSchedules;