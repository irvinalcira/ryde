import React from 'react';
import {View,Text, Image,SafeAreaView,ScrollView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import SkyTrainStationStyles from '../../styles/skytrains/SkyTrainStationStyles';
import ScheduleTouchable from '../../comps/ScheduleTouch';
import DividerLine from '../../comps/Divider';

export default function SkyTrainStation(){
    return(
      <View style={SkyTrainStationStyles.Container}>
      <View style={SkyTrainStationStyles.Main}>
        <View style={SkyTrainStationStyles.TopView}>
          <View style={SkyTrainStationStyles.ImgStyles}>
              <TouchableOpacity onPress={() => Actions.pop('SkyTrainRoute')}>
              <Image
              style={SkyTrainStationStyles.BackArrow}
              source={require('../../assets/icons/whitearrow.png')}
              />
              </TouchableOpacity>
              
               <Text style={SkyTrainStationStyles.TrainRouteFont}>Waterfront</Text>
            </View>
             

            <View style={SkyTrainStationStyles.MidStyles}>
              <Image
                style={SkyTrainStationStyles.WhiteBus}
                source={require('../../assets/icons/whitetrain.png')}
              />
              <Text style={SkyTrainStationStyles.TrainText}>WATERFRONT</Text>
              <Text style={SkyTrainStationStyles.TrainText}>To King George Station</Text>
            </View>
  
        </View>
     
        
        <ScrollView style={SkyTrainStationStyles.Bottom}>
          <Text style={SkyTrainStationStyles.ScheduleText}>Schedule</Text>
        <View style={SkyTrainStationStyles.TimeWrap}>
          <View style={SkyTrainStationStyles.TimeCont}>
              <View style={SkyTrainStationStyles.SchedView}>
            <Text style={SkyTrainStationStyles.TimeText}>3 min</Text>
            <Text style={SkyTrainStationStyles.SchedText}>King George</Text>
            </View>
            <DividerLine />
            <View style={SkyTrainStationStyles.SchedView}>
            <Text style={SkyTrainStationStyles.TimeText2}>5 min</Text>
            <Text style={SkyTrainStationStyles.SchedText1}>Production-Way University</Text>
            </View>
            <DividerLine />
            <View style={SkyTrainStationStyles.SchedView}>
            <Text style={SkyTrainStationStyles.TimeText2}>8 min</Text>
            <Text style={SkyTrainStationStyles.SchedText1}>Production-Way University</Text>
            </View>
            <DividerLine />
            <View>
              <ScheduleTouchable />
</View>

        </View>
          <View style={SkyTrainStationStyles.OtherCont}>
            <Text style={SkyTrainStationStyles.OtherText}>Other Information</Text>
            <View style={SkyTrainStationStyles.FirstTrainView}>
                <Text style={SkyTrainStationStyles.FirstTrainText}>First Train</Text>
            </View>
        <View style={SkyTrainStationStyles.ColumnView}>
            <View style={SkyTrainStationStyles.Days}>
                <Text style={SkyTrainStationStyles.DaysText}>Monday-Friday</Text>
                <Text style={SkyTrainStationStyles.DaysText}>Saturday</Text>
                <Text style={SkyTrainStationStyles.DaysText}>Sunday &amp; Holidays</Text>
            </View>

            <View style={SkyTrainStationStyles.FirstTime}>
            <Text style={SkyTrainStationStyles.DaysText}>5:32 AM</Text>
            <Text style={SkyTrainStationStyles.DaysText}>6:48 AM</Text>
            <Text style={SkyTrainStationStyles.DaysText}>6:48 AM</Text>
            </View>
        </View>
          </View>
          <View style={SkyTrainStationStyles.OtherCont2}>
            <View style={SkyTrainStationStyles.SecondTrainView}>
                <Text style={SkyTrainStationStyles.FirstTrainText}>Last Train</Text>
            </View>
        <View style={SkyTrainStationStyles.ColumnView}>
            <View style={SkyTrainStationStyles.Days}>
                <Text style={SkyTrainStationStyles.DaysText}>Monday-Friday</Text>
                <Text style={SkyTrainStationStyles.DaysText}>Saturday</Text>
                <Text style={SkyTrainStationStyles.DaysText}>Sunday &amp; Holidays</Text>
            </View>

            <View style={SkyTrainStationStyles.FirstTime}>
            <Text style={SkyTrainStationStyles.DaysText}>5:32 AM</Text>
            <Text style={SkyTrainStationStyles.DaysText}>6:48 AM</Text>
            <Text style={SkyTrainStationStyles.DaysText}>6:48 AM</Text>
            </View>
        </View>
          </View>
          
        </View>
        </ScrollView>

    </View>
    </View>
    )
}
