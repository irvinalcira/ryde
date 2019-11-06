import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image,ScrollView, SafeAreaView} from 'react-native';
import BusRouteStyles from '../../styles/bus/BusRouteStyles';
import Fonts from '../../styles/FontsStyles';

export default function BusRoute(){
  return(
    <SafeAreaView style={BusRouteStyles.Container}>
      <View style={BusRouteStyles.Container}>
        
          <View style={BusRouteStyles.TopView}>

          <View style={BusRouteStyles.NavBar}>

            <View style={BusRouteStyles.ArrowCont}>
            <Image
            style={BusRouteStyles.BackArrow}
            source={require('../../assets/icons/backarrow.png')}
            />
            </View>

            <Text style={[Fonts.BusRoute, BusRouteStyles.NavTitle]}>Bus Route</Text>

            </View>
          
            
            <View style={BusRouteStyles.MidStyles}>
              <Image
                style={BusRouteStyles.WhiteBus}
                source={require('../../assets/icons/whitebus.png')}
              />
                <Text style={Fonts.BlueCont}>116 Edmonds Station</Text>
                <Text style={Fonts.BlueCont}>EAST</Text>
            </View>
                <View style={BusRouteStyles.BotStyles}>
                  <Text style={Fonts.BlueCont}>Stop Name</Text>
                  <Text style={Fonts.BlueCont}>Stop Number</Text>
                </View>
              
   
            </View>
            <ScrollView style={BusRouteStyles.ScrollView}>
              <Text style={BusRouteStyles.BusView}>Test</Text>
              <Text style={BusRouteStyles.BusViewAlt}>Test</Text>
              <Text style={BusRouteStyles.BusView}>Test</Text>
              <Text style={BusRouteStyles.BusViewAlt}>Test</Text>
              <Text style={BusRouteStyles.BusView}>Test</Text>
              <Text style={BusRouteStyles.BusViewAlt}>Test</Text>
            </ScrollView>
        </View>
        </SafeAreaView>
  )
};