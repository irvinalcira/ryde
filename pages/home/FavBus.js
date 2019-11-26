import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import FavStyles from '../../styles/home/FavStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

export default function FavBus(){
  return(
    <View style={FavStyles.CompBox}>

      {/* <Text style={Fonts.Body}>
        Start by adding your favorite route for quick access on the Home Page. You can edit, add, or remove favorites anytime.
      </Text> */}

      <View style={FavStyles.FavCont}>

      {/* Start */}
      <TouchableOpacity>
        <View style={[FavStyles.FavPieceCont]}>
        <View style={FavStyles.StopName}>
         {/* Image */}
         <View>
           <Image
              style={FavStyles.BusIcon}
              source={require('../../assets/icons/bus-active.png')}
            />
         </View>

          {/* Address */}
          <View style={FavStyles.Address}>
            <Text
            numberOfLines={1}
            style={FavStyles.BusName}>
              116 Edmonds Station
            </Text> 
            <Text
            numberOfLines={1}
            style={FavStyles.RouteName}>
              Metrotown Station @ Bay 12
            </Text> 
          </View>
        </View>

          {/* Stop Number */}
          <View style={FavStyles.TimeCont}>
            <Text style={Fonts.EstNum}>6</Text>     
            <Text style={[Fonts.EstTime, {marginTop: -5}]}>MIN AWAY</Text>
          </View>

        </View>
      </TouchableOpacity>
      {/* End */}
  
      {/* Start */}
      <TouchableOpacity>
        <View style={[FavStyles.FavPieceCont]}>
        <View style={FavStyles.StopName}>
         {/* Image */}
         <View>
           <Image
              style={FavStyles.BusIcon}
              source={require('../../assets/icons/bus-active.png')}
            />
         </View>

          {/* Address */}
          <View style={FavStyles.Address}>
            <Text
            numberOfLines={1}
            style={FavStyles.BusName}>
              130 Metrotown Station
            </Text> 
            <Text
            numberOfLines={1}
            style={FavStyles.RouteName}>
Eastbound Central Blvd @ Willingdon Ave
            </Text> 
          </View>
        </View>

          {/* Stop Number */}
          <View style={FavStyles.TimeCont}>
            <Text style={Fonts.EstNum}>10</Text>     
            <Text style={[Fonts.EstTime, {marginTop: -5}]}>MIN AWAY</Text>
          </View>

        </View>
      </TouchableOpacity>
      {/* End */}
  
      {/* Start */}
      <TouchableOpacity>
        <View style={[FavStyles.FavPieceCont]}>
        <View style={FavStyles.StopName}>
         {/* Image */}
         <View>
           <Image
              style={FavStyles.BusIcon}
              source={require('../../assets/icons/bus-active.png')}
            />
         </View>

          {/* Address */}
          <View style={FavStyles.Address}>
            <Text
            numberOfLines={1}
            style={FavStyles.BusName}>
              25 UBC
            </Text> 
            <Text
            numberOfLines={1}
            style={FavStyles.RouteName}>
             Westbound Sanderson Way @ Gilmore Way
            </Text> 
          </View>
        </View>

          {/* Stop Number */}
          <View style={FavStyles.TimeCont}>
            <Text style={Fonts.EstNum}>2</Text>     
            <Text style={[Fonts.EstTime, {marginTop: -5}]}>MIN AWAY</Text>
          </View>

        </View>
      </TouchableOpacity>
      {/* End */}
  
      {/* Start */}
      <TouchableOpacity>
        <View style={[FavStyles.FavPieceCont]}>
        <View style={FavStyles.StopName}>
         {/* Image */}
         <View>
           <Image
              style={FavStyles.BusIcon}
              source={require('../../assets/icons/bus-active.png')}
            />
         </View>

          {/* Address */}
          <View style={FavStyles.Address}>
            <Text
            numberOfLines={1}
            style={FavStyles.BusName}>
              130 Capilano University
            </Text> 
            <Text
            numberOfLines={1}
            style={FavStyles.RouteName}>
           Brentwood Station @ Bay 6
            </Text> 
          </View>
        </View>

          {/* Stop Number */}
          <View style={FavStyles.TimeCont}>
            <Text style={Fonts.EstNum}>11</Text>     
            <Text style={[Fonts.EstTime, {marginTop: -5}]}>MIN AWAY</Text>
          </View>

        </View>
      </TouchableOpacity>
      {/* End */}
  
      {/* Start */}
      <TouchableOpacity>
        <View style={[FavStyles.FavPieceCont]}>
        <View style={FavStyles.StopName}>
         {/* Image */}
         <View>
           <Image
              style={FavStyles.BusIcon}
              source={require('../../assets/icons/bus-active.png')}
            />
         </View>

          {/* Address */}
          <View style={FavStyles.Address}>
            <Text
            numberOfLines={1}
            style={FavStyles.BusName}>
              130 Capilano University
            </Text> 
            <Text
            numberOfLines={1}
            style={FavStyles.RouteName}>
           Brentwood Station @ Bay 6
            </Text> 
          </View>
        </View>

          {/* Stop Number */}
          <View style={FavStyles.TimeCont}>
            <Text style={Fonts.EstNum}>11</Text>     
            <Text style={[Fonts.EstTime, {marginTop: -5}]}>MIN AWAY</Text>
          </View>

        </View>
      </TouchableOpacity>
      {/* End */}
  
      {/* Start */}
      <TouchableOpacity>
        <View style={[FavStyles.FavPieceCont]}>
        <View style={FavStyles.StopName}>
         {/* Image */}
         <View>
           <Image
              style={FavStyles.BusIcon}
              source={require('../../assets/icons/bus-active.png')}
            />
         </View>

          {/* Address */}
          <View style={FavStyles.Address}>
            <Text
            numberOfLines={1}
            style={FavStyles.BusName}>
              130 Capilano University
            </Text> 
            <Text
            numberOfLines={1}
            style={FavStyles.RouteName}>
           Brentwood Station @ Bay 6
            </Text> 
          </View>
        </View>

          {/* Stop Number */}
          <View style={FavStyles.TimeCont}>
            <Text style={Fonts.EstNum}>11</Text>     
            <Text style={[Fonts.EstTime, {marginTop: -5}]}>MIN AWAY</Text>
          </View>

        </View>
      </TouchableOpacity>
      {/* End */}
  


      </View>
    </View>
  )
};