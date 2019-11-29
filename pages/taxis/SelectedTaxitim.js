import React,{Component,useState,useEffect} from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';
import data from '../../storage.json';
import Communications from 'react-native-communications';


import SelectedTaxiStyles from '../../styles/taxis/SelectedTaxiStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

 export default function SelectedTaxi({taxiname,address,phone,website,img}){

    // console.log(phone);

    var stringPhone = JSON.stringify(phone);

    var notFavorited = require('../../assets/icons/favorite2.png');
    var taxiFavorited = require('../../assets/icons/favorite.png')

    const [FavArr,SetFavArr] = useState ([]);
    const [ favTaxiImg, setFavTaxiImg ] = useState(notFavorited);
    let datanew;
    async function checkData(){
        try{
            datanew = await AsyncStorage.getItem("storage");
        if(!datanew){
            promise.datanew = data;
        }
         else {
            promise.datanew = JSON.parse(datanew)
                   console.log("bro",datanew);
         }  
         console.log("bro",datanew);
        } catch {
            e=>console.log("erorrrrrrr", e.message)
        }
 
        return datanew;
      
    }

    async function checkFavTaxi(){
        let c = 0;
        datanew.FavTaxi.forEach((o) => {
            if (taxiname === o.favTaxiName){
                c++;
            }
        });
        return c;
    }

    function setColor(c){
        if (c!=0){
            setFavTaxiImg(taxiFavorited)
        } else {
            setFavTaxiImg(notFavorited)
        }
    }

    async function addRmFav(index){
        if(favTaxiImg === taxiFavorited){
            FavArr.splice(index, 1);
            var data = await AsyncStorage.getItem("storage");
            parsedelete = JSON.parse(data);
            parsedelete.FavTaxi = FavArr;
            await AsyncStorage.setItem("storage", JSON.stringify(FavArr));
        } else {
            var data = await AsyncStorage.getItem("storage");
            storedata = JSON.parse(data);
            storedata.FavTaxi.push({
                favtaxiname: taxiname,
                favtaxiphone:phone,
            })
            await AsyncStorage.setItem("storage", JSON.stringify(storedata));
        }
    }

    useEffect(async()=>{
        await checkData();
        await checkFavTaxi()
                setColor();
      

        
    },[]);

    // console.log(faved);


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
                            addRmFav()
                            // console.log(faved);
                        }
                    }
      >
          
          <Image
              style={SelectedTaxiStyles.FavoriteIcon}
              source={favTaxiImg}
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