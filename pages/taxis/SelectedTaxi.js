import React,{Component,useState, useEffect} from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

import SelectedTaxiStyles from '../../styles/taxis/SelectedTaxiStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

export default function SelectedTaxi(){
    const [Data,setData] = useState();

  fetchData= async()=>{
    const response = await fetch('http://localhost:8888/ryde/ryde.php');
    const users = await response.json();
    // this.setState({data: users});
    setData({data:users});
  }

  useEffect=(()=>{
    fetchData();
  },[])
  

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
                      source={require('../../imgs/taxis/vancouver-taxi.jpg')}
                  />
          </View>
          
      <View style={SelectedTaxiStyles.TaxiInformationContainer}>
      
           <View style={SelectedTaxiStyles.TitleContainer}>
      
          <View style={SelectedTaxiStyles.TaxiName}>    
              <Text style={Fonts.TaxiTitle}>Vancouver Taxi</Text>
          </View>
      
          <View style={SelectedTaxiStyles.TaxiFavorite}>
              <Image
                  style={SelectedTaxiStyles.FavoriteIcon}
                  source={require('../../assets/icons/favorite2.png')}
              />
          </View>
      
          </View>
      
      
          <View style={SelectedTaxiStyles.InfoContainer}>
          <Text style={Fonts.TaxiHeading}>Address</Text>
          <Text style={Fonts.Body}>760 Clark Drive, Vancouver, BC, V5L 3J2</Text>
          </View>
      
          <View style={SelectedTaxiStyles.InfoContainer}>
          <Text style={Fonts.TaxiHeading}>Website</Text>
          <Text style={Fonts.Body}>www.avancouvertaxi.com</Text>
          </View>
      
          <View style={SelectedTaxiStyles.InfoContainer}>
          <Text style={Fonts.TaxiHeading}>Phone Number</Text>
          <Text style={Fonts.Body}>(604)871-1111</Text>
          </View>
      
          <TouchableOpacity  style={Buttons.CallBut}>
          <Text style={Buttons.CallButText}>Call Taxi</Text>
          </TouchableOpacity>
      </View>       
            </View>
            </View>
        )
    }