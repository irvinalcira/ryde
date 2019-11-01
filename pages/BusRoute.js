import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image,ScrollView, SafeAreaView} from 'react-native';
import TabBar from '../comps/TabBar';
import BusRouteStyles from '../styles/BusRouteStyles';

export default function BusRoute(){
  return(
      <View style={BusRouteStyles.container}>
          <View style={BusRouteStyles.TopView}>
            <View style={BusRouteStyles.ImgStyles}>
              <View style={BusRouteStyles.BusRouteView}>
                <Image
                style={BusRouteStyles.BackArrow}
                source={require('../assets/icons/whitearrow.png')}
                />
                </View>
                < View style={BusRouteStyles.BusRouteViewAlt}>
                <Text style={BusRouteStyles.BusRouteFont}>Bus Route</Text>
                </View>
            </View>
            
                  <View style={BusRouteStyles.MidStyles}>
                    <Image
                      style={BusRouteStyles.WhiteBus}
                      source={require('../assets/icons/whitebus.png')}
                    />
                      <Text style={{color:"white",margin:10}}>116 Edmonds Station</Text>
                      <Text style={{color:"white"}}>EAST</Text>
                  </View>
                      <View style={BusRouteStyles.BotStyles}>
                        <Text style={{color:"white"}}>Stop Name</Text>
                        <Text style={{color:"white"}}>Stop Number</Text>
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
            <TabBar />
        </View>
  )
};