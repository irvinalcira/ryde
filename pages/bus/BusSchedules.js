import React, { useState, useEffect } from 'react';

import { View, SafeAreaView, Text, TextInput, TouchableOpacity,Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';


import BusSchedulesStyles from '../../styles/bus/BusSchedulesStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

function BusSchedules(props) {
 
  const [StopNumberInput, setStopNumberInput] = useState("");
  const [RouteNumberInput, setRouteNumberInput] = useState("");
  // Bus Number : 130
async function fetchRouteData() {
  var routedata = {
    "RouteNumber": RouteNumberInput
  }

  // console.log(RouteNumberInput);
  var response = await fetch('http://localhost:8888/ryde/BusNumber.php?busnum=' + RouteNumberInput);
   newroutedata = await response.json();

  // console.log('busnum', newroutedata);
  Actions.BusRoute(newroutedata,RouteNumberInput);
}

  //Bus Stop Data Eg: 60715 
  async function fetchStopData(){
    var data = {
      "StopNumber": StopNumberInput
    }
   var response = await fetch('https://irvinalcira.com/rydedatabase/StopNumber.php?stopnum=' + StopNumberInput);
     newdata = await response.json();
     if (newdata.length===0){
      Alert.alert(
        'No Buses Found'
      )
      // console.log("fetch", newdata);
     }
     else {
      // console.log("fetch", newdata);
      Actions.BusLastRoute({
        newdata:newdata,
        StopNumberInput:StopNumberInput
      });
     }
   
  }

  return (
    <SafeAreaView style={BusSchedulesStyles.Container}>
      <View style={[BusSchedulesStyles.Container]}>
        <Text style={Fonts.Title}>Bus Schedules</Text>
        <Text style={Fonts.Heading}>Find A Bus</Text>
        <Text style={Fonts.Body}>Search for a bus to see its full route</Text>
        <TextInput
          style={Fonts.Inp}
          placeholder="Enter Bus Name"
          placeholderTextColor='gray'
          onChangeText={(Text) => setRouteNumberInput(Text)}
        />


        <TouchableOpacity style={Buttons.Main} onPress={() => {
          fetchRouteData()
        }}>
          <Text style={Buttons.MainText}>View All Bus Routes</Text>
        </TouchableOpacity>
        <Text style={Fonts.Heading}>View Bus Departures in Real-Time</Text>
        <Text style={Fonts.Body}>Enter a bus route number to view the next bus</Text>
        <TextInput
          style={Fonts.Inp}
          placeholder="Enter Bus Stop Number (IE:#60715)"
          placeholderTextColor='gray'
          onChangeText={(Text) => setStopNumberInput(Text)}
        />
        <TouchableOpacity style={Buttons.Alt} onPress={() =>{
            fetchStopData()
        }}>
          <Text style={Buttons.MainText}>Find Bus</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
};

//test

export default BusSchedules;