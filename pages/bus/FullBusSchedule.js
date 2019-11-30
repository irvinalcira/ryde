import React, { useState } from 'react';
import {View,Text, Image,SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import FullBusStyles from '../../styles/bus/FullBusScheduleStyles';
import Fonts from '../../styles/FontsStyles';

import Divider from '../../comps/Divider';

function FullBusSchedule({RouteNo,RouteName,Schedules,StopNumber}) {
// console.log(Schedules[0])
let Min;
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
              <Text style={Fonts.StreetName}>Northbound Willingdon Ave / Kingsborough St</Text>
            </View>

       </View>

      <View style={FullBusStyles.Bottom}>

      <View style={FullBusStyles.ScheduleCont}>
{
      Schedules.map((obj,i)=>{


        var LeftTimeColor = '#363636';
        var LeftTimeSize = 22;
        var RightTimeSize = 16;
        var RightTimeFont = 'Assistant-Regular'

        if (i != 0) {
          LeftTimeColor = 'gray'
          LeftTimeSize = 19;
          RightTimeSize = 15;
        } else {
          LeftTimeColor = '#529e1c'
          LeftTimeSize = 23;
          RightTimeSize = 16
          RightTimeFont = 'Assistant-Bold'
        }


        if (obj.ExpectedCountdown <= 1){
          Min = ""
          obj.ExpectedCountdown="Now";         
        } else {
          Min = "Min"
        }


        
        var Space = obj.ExpectedLeaveTime.split(" ", 1);
                     return (
                        <View style={[FullBusStyles.TimeCont]}>
                          <View style={FullBusStyles.TimeOuterCont}>
                            <View style={[FullBusStyles.TimeInnerCont]}>
                        <Text style={[Fonts.Time, {color:LeftTimeColor, fontSize: LeftTimeSize}]}> {obj.ExpectedCountdown}</Text>
                         <Text style={[Fonts.Min, {color:LeftTimeColor, fontSize: LeftTimeSize}]}> {Min} </Text>
                         </View>
                         <Text style={[Fonts.LeaveTime, {color:LeftTimeColor, fontSize: RightTimeSize, fontFamily: RightTimeFont}]}> {Space}</Text>
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