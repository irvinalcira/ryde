import React from 'react';
import {View,Text, Image,SafeAreaView,ScrollView} from 'react-native';
import SkyTrainLastRouteStyles from '../../styles/skytrains/SkyTrainLastRouteStyles';
import ScheduleTouchable from '../../comps/ScheduleTouch';
import DividerLine from '../../comps/Divider';

export default function SkyTrainLastRoute(){
    return(
      <SafeAreaView>
      <View style={SkyTrainLastRouteStyles.Main}>
        <View style={SkyTrainLastRouteStyles.TopView}>
          <View style={SkyTrainLastRouteStyles.ImgStyles}>
              <Image
              style={SkyTrainLastRouteStyles.BackArrow}
              source={require('../../assets/icons/whitearrow.png')}
              />
               <Text style={SkyTrainLastRouteStyles.TrainRouteFont}>Waterfront</Text>
            </View>
             

            <View style={SkyTrainLastRouteStyles.MidStyles}>
              <Image
                style={SkyTrainLastRouteStyles.WhiteBus}
                source={require('../../assets/icons/whitetrain.png')}
              />
              <Text style={SkyTrainLastRouteStyles.TrainText}>WATERFRONT</Text>
              <Text style={SkyTrainLastRouteStyles.TrainText}>To King George Station</Text>
            </View>
  
        </View>
     
        
        <ScrollView style={SkyTrainLastRouteStyles.Bottom}>
          <Text style={SkyTrainLastRouteStyles.ScheduleText}>Schedule</Text>
        <View style={SkyTrainLastRouteStyles.TimeWrap}>
          <View style={SkyTrainLastRouteStyles.TimeCont}>
              <View style={SkyTrainLastRouteStyles.SchedView}>
            <Text style={SkyTrainLastRouteStyles.TimeText}>3 min</Text>
            <Text style={SkyTrainLastRouteStyles.SchedText}>King George</Text>
            </View>
            <DividerLine />
            <View style={SkyTrainLastRouteStyles.SchedView}>
            <Text style={SkyTrainLastRouteStyles.TimeText2}>5 min</Text>
            <Text style={SkyTrainLastRouteStyles.SchedText1}>Production-Way University</Text>
            </View>
            <DividerLine />
            <View style={SkyTrainLastRouteStyles.SchedView}>
            <Text style={SkyTrainLastRouteStyles.TimeText2}>8 min</Text>
            <Text style={SkyTrainLastRouteStyles.SchedText1}>Production-Way University</Text>
            </View>
            <DividerLine />
            <View>
              <ScheduleTouchable />
</View>

        </View>
          <View style={SkyTrainLastRouteStyles.OtherCont}>
            <Text style={SkyTrainLastRouteStyles.OtherText}>Other Information</Text>
            <View style={SkyTrainLastRouteStyles.FirstTrainView}>
                <Text style={SkyTrainLastRouteStyles.FirstTrainText}>First Train</Text>
            </View>
        <View style={SkyTrainLastRouteStyles.ColumnView}>
            <View style={SkyTrainLastRouteStyles.Days}>
                <Text style={SkyTrainLastRouteStyles.DaysText}>Monday-Friday</Text>
                <Text style={SkyTrainLastRouteStyles.DaysText}>Saturday</Text>
                <Text style={SkyTrainLastRouteStyles.DaysText}>Sunday &amp; Holidays</Text>
            </View>

            <View style={SkyTrainLastRouteStyles.FirstTime}>
            <Text style={SkyTrainLastRouteStyles.DaysText}>5:32 AM</Text>
            <Text style={SkyTrainLastRouteStyles.DaysText}>6:48 AM</Text>
            <Text style={SkyTrainLastRouteStyles.DaysText}>6:48 AM</Text>
            </View>
        </View>
          </View>
          <View style={SkyTrainLastRouteStyles.OtherCont2}>
            <View style={SkyTrainLastRouteStyles.SecondTrainView}>
                <Text style={SkyTrainLastRouteStyles.FirstTrainText}>Last Train</Text>
            </View>
        <View style={SkyTrainLastRouteStyles.ColumnView}>
            <View style={SkyTrainLastRouteStyles.Days}>
                <Text style={SkyTrainLastRouteStyles.DaysText}>Monday-Friday</Text>
                <Text style={SkyTrainLastRouteStyles.DaysText}>Saturday</Text>
                <Text style={SkyTrainLastRouteStyles.DaysText}>Sunday &amp; Holidays</Text>
            </View>

            <View style={SkyTrainLastRouteStyles.FirstTime}>
            <Text style={SkyTrainLastRouteStyles.DaysText}>5:32 AM</Text>
            <Text style={SkyTrainLastRouteStyles.DaysText}>6:48 AM</Text>
            <Text style={SkyTrainLastRouteStyles.DaysText}>6:48 AM</Text>
            </View>
        </View>
          </View>
          
        </View>
        </ScrollView>

    </View>
    </SafeAreaView>
    )
}
