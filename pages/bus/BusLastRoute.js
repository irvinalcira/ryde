import React from 'react';
import {View,Text, Image,SafeAreaView} from 'react-native';
import BusLastStyles from '../../styles/bus/BusLastRouteStyles';
import ScheduleTouchable from '../../comps/ScheduleTouch';
import DarkBlueTouchable from '../../comps/DarkBlueTouch';
import DividerLine from '../../comps/Divider';

export default function BusLastRoute(){
    return(
      <SafeAreaView>
      <View style={BusLastStyles.Main}>
        <View style={BusLastStyles.TopView}>
          <View style={BusLastStyles.ImgStyles}>
              <Image
              style={BusLastStyles.BackArrow}
              source={require('../../assets/icons/whitearrow.png')}
              />
               <Text style={BusLastStyles.BusRouteFont}>60212</Text>
            </View>
             

            <View style={BusLastStyles.MidStyles}>
              <Image
                style={BusLastStyles.WhiteBus}
                source={require('../../assets/icons/whitebus.png')}
              />
              <Text style={BusLastStyles.BusText}>Metrotown Station @ Bay 12</Text>
              <Text style={BusLastStyles.DirText}>EAST</Text>
            </View>
  
        </View>
     
        
        <View style={BusLastStyles.Bottom}>
          <Text style={BusLastStyles.ScheduleText}>Schedule</Text>
        <View style={BusLastStyles.TimeWrap}>
          <View style={BusLastStyles.TimeCont}>
            <Text style={BusLastStyles.TimeText}>3 min</Text>
            <DividerLine />
            <Text style={BusLastStyles.TimeText2}>5 min</Text>
            <DividerLine />
            <Text style={BusLastStyles.TimeText2}>8 min</Text>
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
