import React,{useState,useEffect} from 'react';
import {View,Text, Image,SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import FullSkyTrainStyles from '../../styles/skytrains/FullSkyTrainScheduleStyles';
import Fonts from '../../styles/FontsStyles';

import Divider from '../../comps/Divider';

//import db
import Stops from '../../skytraindb/Stops.json';
import StopTime from '../../skytraindb/Schedule.json';
import { ScrollView } from 'react-native-gesture-handler';

// test
function FullSkyTrainSchedule({time}) {
  var today = new Date();
  var timenew = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // if (time>timenew){
  //  time = time-timenew
  // } else {
  //   time = timenew-time
  // }
  console.log(time);
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
      <ScrollView>
      {
    time.map((obj,i)=>{
                        return (
                   <View>
           <View style={FullSkyTrainStyles.TimeCont}>
          <Text style={[Fonts.Time]}>{obj}</Text>
          {/* <Text style={[Fonts.LineDetail]}> King George</Text> */}
          </View>
          <Divider />
          </View>
         
                        )
                        })
                    }
 </ScrollView>
      </View>

      </View>
      </View>
  </SafeAreaView>
  )
}

export default FullSkyTrainSchedule;