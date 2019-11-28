import React, { useState,useEffect } from 'react';
import {View,Text, Image,SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import FullBusStyles from '../../styles/bus/FullBusScheduleStyles';
import Fonts from '../../styles/FontsStyles';

import Divider from '../../comps/Divider';

function FullBusSchedule({RouteNo,RouteName,Schedules,StopNumber}) {
// console.log(Schedules[0])
const [, forceUpdate] = useState();
let Min;
let hour;
let extramin;
useEffect(() => {
  setTimeout(forceUpdate, 2000);
}, []);
  return (
    <SafeAreaView style={FullBusStyles.Container}>
      <View style={FullBusStyles.Container}> 

      <View style={FullBusStyles.TopView}>

          {/* Nav Bar (Blue Section) */}
          <View style={FullBusStyles.NavBar}>

            {/* Arrow */}
            <View style={FullBusStyles.ArrowCont}>
            <TouchableOpacity onPress={() => Actions.pop('Bus Last Route')}>
              <Image
              style={FullBusStyles.BackArrow}
              source={require('../../assets/icons/backarrow.png')}
              />
              </TouchableOpacity>
              </View>

              {/* Stop Number */}
               <Text style={[Fonts.BusRoute, FullBusStyles.NavTitle]}>{StopNumber}</Text>
            </View>
             
            <View style={FullBusStyles.MidStyles}>
              <View style={FullBusStyles.BusStopInfo}>
              <Text style={Fonts.BusNum}>{RouteNo}</Text>

              </View>
              <Text style={Fonts.BusName}>{RouteName}</Text>
            </View>

       </View>

      <View style={FullBusStyles.Bottom}>

      <View style={FullBusStyles.ScheduleCont}>
{
      Schedules.map((obj,i)=>{
        if (obj.ExpectedCountdown===0||obj.ExpectedCountdown===1){
          Min = ""
          obj.ExpectedCountdown="Now";
         
        }else if (obj.ExpectedCountdown === 60){
          obj.ExpectedCountdown = 1
          hour = "Hour"
        }
        else if (obj.ExpectedCountdown > 60){
          hour = "Hour"
          extramin = obj.ExpectedCountdown - 60
          obj.ExpectedCountdown = 1
        }
        else {
          Min = "Min"
        }
       var Space =  obj.ExpectedLeaveTime.split(" ", 1);
                     return (
                        <View style={FullBusStyles.TimeCont}>
                          <View style={FullBusStyles.TimeOuterCont}>
                            <View style={FullBusStyles.TimeInnerCont}>
                        <Text style={[Fonts.Time2]}> {obj.ExpectedCountdown} {hour}  {extramin}</Text>
                         <Text style={[Fonts.Time]}> {Min} </Text>
                         </View>
                        <Text style={[Fonts.Time]}> {Space}</Text>
                        </View>
                        <Divider />
                      </View>
                      )
                      })
                  }
      
      </View>

      </View>
      </View>
    </SafeAreaView>
  )
}

export default FullBusSchedule;

//test