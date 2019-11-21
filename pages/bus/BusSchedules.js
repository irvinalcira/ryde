import React, { useState } from 'react';

import { View, SafeAreaView, Text, TextInput,TouchableOpacity, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';


import BusSchedulesStyles from '../../styles/bus/BusSchedulesStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

function BusSchedules(){
  const [StopNumber,setStopNumber]=useState("");

  return(
      <SafeAreaView style={BusSchedulesStyles.Container}>
          <View style={[BusSchedulesStyles.Container]}>

           <Text style={Fonts.Title}>Bus Schedules</Text>

           {/* FIND A BUS INPUT */}
           <Text style={Fonts.Heading}>View Bus Route</Text>
           <Text style={Fonts.Body}>Search for a bus to see its full route</Text>
           <TextInput
           style={Fonts.Inp}
           placeholder="Example: 130 Metrotown Station"
           placeholderTextColor='gray'
           />
          {/* END OF FIND A BUS INPUT */}

          {/* NEXT BUS INPUT */}

          <TouchableOpacity style={Buttons.Main} onPress={() => Actions.BusRoute()}>
            <Text style={Buttons.MainText}>View Bus Route</Text>
          </TouchableOpacity>

          <Text style={Fonts.Heading}>Check Next Bus</Text>
          <Text style={Fonts.Body}>Enter a Bus Stop # to see when the next bus comes</Text>
          <TextInput
          style={Fonts.Inp}
          placeholder="Example: 60212"
          keyboardType={'number-pad'} maxLength={5}
          placeholderTextColor='gray' onChangeText = {(Text)=> setStopNumber(Text)}
          />
          <TouchableOpacity style={Buttons.Alt} onPress={() => Actions.BusLastRoute()}>
             <Text style={Buttons.MainText}>Find Bus</Text>
          </TouchableOpacity>
           </View>
           

      </SafeAreaView>
  )
};

//test

export default BusSchedules;