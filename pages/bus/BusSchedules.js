import React, { useState } from 'react';

import { View, SafeAreaView, Text, TextInput,TouchableOpacity, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';


import BusSchedulesStyles from '../../styles/bus/BusSchedulesStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

function BusSchedules(){
  
  const [StopNumberInput, setStopNumberInput] = useState("");
  const [RouteNumberInput, setRouteNumberInput] = useState("");
    //Bus Stop Data Eg: 60715 
  async function fetchStopData(){
      var data = {
        "StopNumber": StopNumberInput
      }

      var response = await fetch('http://localhost:8888/ryde/StopNumber.php?stopnum=' + StopNumberInput);
      newdata = await response.json();

      Actions.BusLastRoute(newdata);
      // console.log('stopnum', data);
    }
  async function fetchRouteData() {
    var routedata = {
      "RouteNumber": RouteNumberInput
    }

    console.log(RouteNumberInput);
    var response = await fetch('http://localhost:8888/ryde/BusNumber.php?busnum=' + RouteNumberInput);
    newroutedata = await response.json();

    console.log('busnum', newroutedata);
    Actions.BusRoute(newroutedata);
  }

  return(
      <SafeAreaView style={BusSchedulesStyles.Container}>
          <View style={[BusSchedulesStyles.Container]}>

           <Text style={Fonts.Title}>Bus Schedules</Text>

           {/* FIND A BUS INPUT */}
           <Text style={Fonts.Heading}>View Bus Route</Text>
           <Text style={Fonts.Body}>Search for a bus to see its full route</Text>
           <TextInput
           style={Fonts.Inp}
           placeholder="Example: 130, 125, or 555"
           placeholderTextColor='gray'
           keyboardType={'number-pad'}
           keyboardType={'number-pad'} maxLength={3}
           onChangeText={(Text) => setRouteNumberInput(Text)}
           />
          {/* END OF FIND A BUS INPUT */}

          {/* NEXT BUS INPUT */}

          <TouchableOpacity style={Buttons.Main} onPress={() => { fetchRouteData() }}>
            <Text style={Buttons.MainText}>View Bus Route</Text>
          </TouchableOpacity>

          <Text style={Fonts.Heading}>Check Next Bus</Text>
          <Text style={Fonts.Body}>Enter a Bus Stop # to see when the next bus comes</Text>
          <TextInput
          style={Fonts.Inp}
          placeholder="Example: 60212"
          keyboardType={'number-pad'} maxLength={5}
          placeholderTextColor='gray' onChangeText={(Text) => setStopNumberInput(Text)}
          />
          <TouchableOpacity style={Buttons.Alt} onPress={() =>{ fetchStopData() }}>
             <Text style={Buttons.MainText}>Find Bus</Text>
          </TouchableOpacity>
           </View>
           

      </SafeAreaView>
  )
};

//test

export default BusSchedules;