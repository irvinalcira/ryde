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
     if (newdata.length===undefined){
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
        <Text style={Fonts.Title}>Buses</Text>
        <Text style={Fonts.Heading}>View Bus Route</Text>
        <Text style={Fonts.Body}>Search for a bus to see its full route</Text>
        <TextInput
          style={Fonts.Inp}
          placeholder="Example: 130, 125 or 555"
          maxLength={3}
          placeholderTextColor='gray'
          onChangeText={(Text) => setRouteNumberInput(Text)}
        />


        <TouchableOpacity style={Buttons.Main} onPress={() => {
          fetchRouteData()
        }}>
          <Text style={Buttons.MainText}>View Bus Route</Text>
        </TouchableOpacity>
        <Text style={Fonts.Heading}>Check Next Bus</Text>
        <Text style={Fonts.Body}>Enter a Bus Stop # to see when the next bus comes</Text>
        <TextInput
          style={Fonts.Inp}
          placeholder="Example: 60212"
          placeholderTextColor='gray'
          maxLength={5}
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