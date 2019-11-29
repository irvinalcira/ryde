import React,{Component,useState,useEffect} from 'react';
import { View, Alert, Text, Linking, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';
import data from '../../storage.json';
import Communications from 'react-native-communications';


import SelectedTaxiStyles from '../../styles/taxis/SelectedTaxiStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

 export default function SelectedTaxi({taxiname,address,phone,website,img}){

    // console.log(phone);

    var stringPhone = JSON.stringify(phone);
    var goToWebsite = null;
    var stringWebsite = JSON.stringify(website);

    console.log(stringWebsite)

    const [ favTaxi, setFavTaxi ] = useState([]);
    const [ faved, setFaved ] = useState("false");
    const [ favTaxiImg, setFavTaxiImg ] = useState(require('../../assets/icons/favorite2.png'));
  

    async function UpdateFavTaxi(){

        var datanew = await AsyncStorage.getItem("storage");
        if(!datanew){
            datanew = data;
        } else {
            datanew = JSON.parse(datanew)
        }
                datanew.FavTaxi.push({
                    favtaxiname:taxiname,
                    favtaxiphone:phone,
                    state: faved
                })
    
        
        console.log("test",datanew.FavTaxi);
        AsyncStorage.setItem("storage",JSON.stringify(datanew));
 
    };


    function Website(){
        if (website === 'No Website Available'){  
            goToWebsite = Alert.alert('No Website Available', "This Taxi Company does not have a Website");
            
        } else {
            goToWebsite = Communications.web('https://' + website)
        }
    }

    



    return (
        
  
      <View style={SelectedTaxiStyles.Container}>
  
  <StatusBar hidden={true} />  
  
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
  
      <TouchableOpacity style={SelectedTaxiStyles.TaxiFavorite}
                        onPress={ async () => {
                            UpdateFavTaxi()
                        console.log(favTaxi);
                        }
                    }
      >
          
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
      <TouchableOpacity onPress = {() => Website()}>
      <Text style={[Fonts.Body, {textDecorationLine: 'underline' }]}>{website}</Text>
      </TouchableOpacity>
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