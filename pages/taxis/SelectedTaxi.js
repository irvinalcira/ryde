import React,{Component,useState,useEffect} from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native';
import {Actions} from 'react-native-router-flux';

import Communications from 'react-native-communications';


import SelectedTaxiStyles from '../../styles/taxis/SelectedTaxiStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

 export default function SelectedTaxi({taxiname,address,phone,website,img}){

    console.log(phone);

    var stringPhone = 
    JSON.stringify(phone);
    return (
        
  
      <View style={SelectedTaxiStyles.Container}>
  
  <StatusBar 
      hidden={true} />  
  
      <View style={SelectedTaxiStyles.Container}>
  
      <View style={SelectedTaxiStyles.BackButton}>
  
          <TouchableOpacity onPress={() => Actions.pop('Taxis')}>
          <Image
              style={SelectedTaxiStyles.BackIcon}
              source={require('../../assets/icons/back2.png')}
          />
          </TouchableOpacity>
  </View>
   
      <View style={SelectedTaxiStyles.TaxiImageContainer}>
          <Image
                  style={SelectedTaxiStyles.TaxiImg}
                  source={{uri:img}}
              />
      </View>
  <View style={SelectedTaxiStyles.TaxiInformationContainer}>
  
       <View style={SelectedTaxiStyles.TitleContainer}>
  
      <View style={SelectedTaxiStyles.TaxiName}>    
          <Text style={Fonts.TaxiTitle}>{taxiname}</Text>
      </View>
  
      <TouchableOpacity style={SelectedTaxiStyles.TaxiFavorite}>
          
          <Image
              style={SelectedTaxiStyles.FavoriteIcon}
              source={require('../../assets/icons/favorite2.png')}
          />
      </TouchableOpacity>
  
      </View>
  
  
      <View style={SelectedTaxiStyles.InfoContainer}>
      <Text style={Fonts.TaxiHeading}>Address</Text>
      <Text style={Fonts.Body}>{address}</Text>
      </View>
  
      <View style={SelectedTaxiStyles.InfoContainer}>
      <Text style={Fonts.TaxiHeading}>Website</Text>
      <Text style={Fonts.Body}>{website}</Text>
      </View>
  
      <View style={SelectedTaxiStyles.InfoContainer}>
      <Text style={Fonts.TaxiHeading}>Phone Number</Text>
      <Text style={Fonts.Body}>{phone}</Text>
      </View>
  
      <TouchableOpacity  style={Buttons.CallBut} onPress = {() => Communications.phonecall( stringPhone , true)}>
      <Text style={Buttons.CallButText}>Call Taxi</Text>
      </TouchableOpacity>
  </View>       
        </View>

        </View>
        
    )
}