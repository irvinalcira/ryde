import React from 'react';
import {View,Text, Image,SafeAreaView} from 'react-native';
import BusLastStyles from '../styles/BusLastRouteStyles';
import TabBar from '../comps/TabBar';
import DarkBlueTouchable from '../comps/DarkBlueTouch';
import LightBlueTouchable from '../comps/LightBlueTouch';
import DividerLine from '../comps/Divider';

export default function BusLastRoute(){
    return(
      <View style={BusLastStyles.Main}>
        <View style={BusLastStyles.TopView}>
          <View style={BusLastStyles.ImgStyles}>
            <View style={BusLastStyles.ImgStyles1}>
              <Image
              style={BusLastStyles.BackArrow}
              source={require('../assets/icons/whitearrow.png')}
              />
              </View>
              <View style={BusLastStyles.ImgStyles2}>
               <Text style={BusLastStyles.BusRouteFont}>60212</Text>
               </View>
            </View>
             

            <View style={BusLastStyles.MidStyles}>
              <Image
                style={BusLastStyles.WhiteBus}
                source={require('../assets/icons/whitebus.png')}
              />
              <Text style={{color:"white",margin:10}}>Metrotown Station @ Bay 12</Text>
              <Text style={{color:"white", fontFamily:"Assistant-Regular"}}>EAST</Text>
            </View>

            <View style={BusLastStyles.BotStyles}>
              <Text style={{color:"white",fontFamily:"Assistant-Regular"}}>Stop Name</Text>
              <Text style={{color:"white",fontFamily:"Assistant-Regular"}}>Stop Number</Text>
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
            <LightBlueTouchable />
          </View>
          
        </View>
          <DarkBlueTouchable />
        </View>

          <TabBar />

    </View>
    )
}
