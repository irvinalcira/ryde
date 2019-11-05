import React from 'react';
import {View,Text, Image,SafeAreaView} from 'react-native';

import BusLastStyles from '../../styles/bus/BusLastRouteStyles';
import Fonts from '../../styles/FontsStyles';

import ScheduleTouchable from '../../comps/ScheduleTouch';
import DarkBlueTouchable from '../../comps/DarkBlueTouch';
import DividerLine from '../../comps/Divider';

export default function BusLastRoute(){
    return(
      <SafeAreaView style={BusLastStyles.Main}>
      <View style={BusLastStyles.Main}>

        <View style={BusLastStyles.TopView}>

          {/* Nav Bar (Blue Section) */}
          <View style={BusLastStyles.NavBar}>
            <View style={BusLastStyles.ArrowCont}>
              <Image
              style={BusLastStyles.BackArrow}
              source={require('../../assets/icons/whitearrow.png')}
              />
              </View>
               <Text style={[Fonts.BusRoute, BusLastStyles.NavTitle]}>60212</Text>
            </View>
             
            <View style={BusLastStyles.MidStyles}>
              <Image
                style={BusLastStyles.WhiteBus}
                source={require('../../assets/icons/whitebus.png')}
              />
              <Text style={Fonts.BlueCont}>Metrotown Station @ Bay 12</Text>
              <Text style={Fonts.BlueCont}>EAST</Text>
            </View>
        </View>
     
          {/* Schedule */}
          <View style={BusLastStyles.Bottom}>
            <Text style={Fonts.ScheduleTitle}>Schedule</Text>
            <View style={BusLastStyles.TimeWrap}>
              <View style={BusLastStyles.TimeCont}>
                <Text style={Fonts.TimeText}>3 min</Text>
                <DividerLine />
                <Text style={Fonts.TimeText2}>5 min</Text>
                <DividerLine />
                <Text style={Fonts.TimeText2}>8 min</Text>
                <DividerLine />

                <View>
                  <ScheduleTouchable />
                </View>
              </View>
           </View>
          
          <DarkBlueTouchable />
        </View>
      </View>
      </SafeAreaView>
    )
}
