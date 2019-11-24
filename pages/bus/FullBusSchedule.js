import React from 'react';
import {View,Text, Image,SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import FullBusStyles from '../../styles/bus/FullBusScheduleStyles';
import Fonts from '../../styles/FontsStyles';

import Divider from '../../comps/Divider';

function FullBusSchedule({RouteNo,RouteName,Schedules}) {
console.log(Schedules[0])
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
               <Text style={[Fonts.BusRoute, FullBusStyles.NavTitle]}>60212</Text>
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
                      return (
                        <View style={FullBusStyles.TimeCont}>
                        <Text style={[Fonts.Time]}>  {obj.ExpectedLeaveTime} </Text>
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