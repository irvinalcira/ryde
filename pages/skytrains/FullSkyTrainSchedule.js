import React,{useState,useEffect} from 'react';
import {View,Text, Image,SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import FullSkyTrainStyles from '../../styles/skytrains/FullSkyTrainScheduleStyles';
import Fonts from '../../styles/FontsStyles';

import Divider from '../../comps/Divider';

//import db
import Stops from '../../skytraindb/Stops.json';
import StopTime from '../../skytraindb/Schedule.json';

// test
function FullSkyTrainSchedule() {
  return (
    <SafeAreaView style={FullSkyTrainStyles.Container}>
      <View style={FullSkyTrainStyles.Container}> 

      <View style={FullSkyTrainStyles.TopView}>

          {/* Nav Bar (Blue Section) */}
          <View style={FullSkyTrainStyles.NavBar}>

            {/* Arrow */}
            <View style={FullSkyTrainStyles.ArrowCont}>
            <TouchableOpacity onPress={() => Actions.pop('SkyTrain Station')}>
              <Image
              style={FullSkyTrainStyles.BackArrow}
              source={require('../../assets/icons/backarrow.png')}
              />
              </TouchableOpacity>
              </View>

              {/* Stop Number */}
               <Text style={[Fonts.BusRoute, FullSkyTrainStyles.NavTitle]}>Waterfront</Text>
            </View>
             
            <View style={FullSkyTrainStyles.MidStyles}>
              <Text style={Fonts.LineName}>Expo Line</Text>
              <Text style={Fonts.BlueCont}>TO KING GEORGE STATION</Text>
            </View>
       </View>

      <View style={FullSkyTrainStyles.Bottom}>

      <View style={FullSkyTrainStyles.ScheduleCont}>

        <View style={FullSkyTrainStyles.TimeCont}>
          <Text style={[Fonts.Time]}> 3:24 PM</Text>
          <Text style={[Fonts.LineDetail]}> King George</Text>
          </View>
          
          <Divider />

        <View style={FullSkyTrainStyles.TimeCont}>
          <Text style={[Fonts.Time]}> 3:29 PM</Text>
          <Text style={[Fonts.LineDetail]}> Production-Way University</Text>
          </View>

          <Divider />

        <View style={FullSkyTrainStyles.TimeCont}>
          <Text style={[Fonts.Time]}> 3:37 PM</Text>
          <Text style={[Fonts.LineDetail]}> Production-Way University</Text>
          </View>

          <Divider />

        <View style={FullSkyTrainStyles.TimeCont}>
          <Text style={[Fonts.Time]}> 3:45 PM</Text>
          <Text style={[Fonts.LineDetail]}> King George</Text>
          </View>

          {/* <Divider /> */}


      

      </View>

      </View>
      </View>
    </SafeAreaView>
  )
}

export default FullSkyTrainSchedule;