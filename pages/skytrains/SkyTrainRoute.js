import React from 'react';
import { View, Text, Image,ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import SkyTrainRouteStyles from '../../styles/skytrains/SkyTrainRouteStyles';
export default function SkyTrainRoute(){
  return(
      <View style={SkyTrainRouteStyles.container}>
          <View style={SkyTrainRouteStyles.TopView}>
            <View style={SkyTrainRouteStyles.ImgStyles}>
              <View style={SkyTrainRouteStyles.TrainRouteView}>
                <TouchableOpacity onPress={() => Actions.pop('SkyTrainSchedules')}>
                  <Image
                  style={SkyTrainRouteStyles.BackArrow}
                  source={require('../../assets/icons/whitearrow.png')}
                  />
                </TouchableOpacity>
                
                </View>
                < View style={SkyTrainRouteStyles.TrainRouteViewAlt}>
                <Text style={SkyTrainRouteStyles.TrainRouteFont}>Expo Line Station</Text>
                </View>
            </View>

                  <View style={SkyTrainRouteStyles.MidStyles}>
                    <Image
                      style={SkyTrainRouteStyles.WhiteTrain}
                      source={require('../../assets/icons/whitetrain.png')}
                    />
                      <Text style={SkyTrainRouteStyles.StationText}>Expo Line</Text>
                      <Text style={SkyTrainRouteStyles.StationAreaText}>To King George Station</Text>
                  </View>
              
   
            </View>
            <ScrollView style={SkyTrainRouteStyles.ScrollView}>
              <TouchableOpacity>
              <Text style={SkyTrainRouteStyles.TrainView}>Waterfront</Text>
              </TouchableOpacity>
              
              <Text style={SkyTrainRouteStyles.TrainViewAlt}>Test</Text>
              <Text style={SkyTrainRouteStyles.TrainView}>Test</Text>
              <Text style={SkyTrainRouteStyles.TrainViewAlt}>Test</Text>
              <Text style={SkyTrainRouteStyles.TrainView}>Test</Text>
              <Text style={SkyTrainRouteStyles.TrainViewAlt}>Test</Text>
            </ScrollView>
        </View>
  )
};