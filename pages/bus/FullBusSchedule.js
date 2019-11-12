import React from 'react';
import {View,Text, Image,SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import FullBusStyles from '../../styles/bus/FullBusScheduleStyles';
import Fonts from '../../styles/FontsStyles';

import Divider from '../../comps/Divider';

function FullBusSchedule() {

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
              <Text style={Fonts.BusNum}>116</Text>
              <Text style={Fonts.BusName}>EDMONDS STATION</Text>
              </View>
              <Text style={Fonts.BlueCont}>METROTOWN STATION @ BAY 12</Text>
            </View>

       </View>

      <View style={FullBusStyles.Bottom}>

      <View style={FullBusStyles.ScheduleCont}>

        <View style={FullBusStyles.TimeCont}>
          <Text style={[Fonts.Time]}> 3:24 PM</Text>
          <Divider />
        </View>

        <View style={FullBusStyles.TimeCont}>
          <Text style={[Fonts.Time]}> 3:28 PM</Text>
          <Divider />
        </View>

        <View style={FullBusStyles.TimeCont}>
          <Text style={[Fonts.Time]}> 3:37 PM</Text>
          <Divider />
        </View>

        <View style={FullBusStyles.TimeCont}>
          <Text style={[Fonts.Time]}> 3:43 PM</Text>
          {/* <Divider /> */}
        </View>

      </View>

      </View>
      </View>
    </SafeAreaView>
  )
}

export default FullBusSchedule;

//test