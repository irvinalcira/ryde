import React from 'react';
import { View, Text, Image,ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import SkyTrainRouteStyles from '../../styles/skytrains/SkyTrainRouteStyles';
import Fonts from '../../styles/FontsStyles';
//test
export default function SkyTrainRoute(){
  return(
    <SafeAreaView style={SkyTrainRouteStyles.Container}>
    <View style={SkyTrainRouteStyles.Container}>
      
        <View style={SkyTrainRouteStyles.TopView}>

        <View style={SkyTrainRouteStyles.NavBar}>

          <View style={SkyTrainRouteStyles.ArrowCont}>
          <Image
          style={SkyTrainRouteStyles.BackArrow}
          source={require('../../assets/icons/backarrow.png')}
          />
          </View>

          <Text style={[Fonts.BusRoute, SkyTrainRouteStyles.NavTitle]}>Expo Line Station</Text>

          </View>
        
          
          <View style={SkyTrainRouteStyles.MidStyles}>
            <Image
              style={SkyTrainRouteStyles.WhiteTrain}
              source={require('../../assets/icons/whitebus.png')}
            />
              <Text style={Fonts.BlueCont}>To King George Station</Text>
              <Text style={Fonts.BlueCont}>WATERFRONT</Text>
          </View>
              <View style={SkyTrainRouteStyles.BotStyles}>
                <Text style={Fonts.BlueCont}>Station Name</Text>
                <Text style={Fonts.BlueCont}>Estimated Time</Text>
              </View>
            
 
          </View>
          <ScrollView style={SkyTrainRouteStyles.ScrollView}>
            <Text style={SkyTrainRouteStyles.TrainView}>Test</Text>
            <Text style={SkyTrainRouteStyles.TrainViewAlt}>Test</Text>
            <Text style={SkyTrainRouteStyles.TrainView}>Test</Text>
            <Text style={SkyTrainRouteStyles.TrainViewAlt}>Test</Text>
            <Text style={SkyTrainRouteStyles.TrainView}>Test</Text>
            <Text style={SkyTrainRouteStyles.TrainViewAlt}>Test</Text>
          </ScrollView>
      </View>
      </SafeAreaView>
  )
};