import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  AsyncStorage
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import FavStyles from '../../styles/home/FavStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

export default function FavBus(){
  let Min;

  const [ favBus, setFavBus ] = useState([]);

async function GetFavBus() {
  var datanew = await AsyncStorage.getItem("storage");
  var parseFavBus = JSON.parse(datanew);

  setFavBus(parseFavBus.FavBus);
}

useEffect(() => {

  GetFavBus();

},[]);

  return(
    <View style={FavStyles.CompBox}>

      {/* <Text style={Fonts.Body}>
        Start by adding your favorite route for quick access on the Home Page. You can edit, add, or remove favorites anytime.
      </Text> */}

      {
        favBus.map((obj, i) => {
          if (obj.ExpectedCountdown===0||obj.ExpectedCountdown===1){
            Min = ""
            obj.ExpectedCountdown="Now";
           
          } else {
            Min = "Min"
          }
          return(


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
                    {obj.favbusroutenumber} {obj.favbusroutename}
                  </Text> 
                  <Text
                  numberOfLines={1}
                  style={FavStyles.RouteName}>
                 {obj.favbusstopnumber} {obj.fav}
                  </Text> 
                </View>
              </View>
      
                {/* Stop Number */}
                <View style={FavStyles.TimeCont}>
                  <Text style={Fonts.EstNum}>{obj.favbustime}</Text>     
                  <Text style={[Fonts.EstTime, {marginTop: -5}]}>MIN AWAY</Text>
                </View>
      
              </View>
            </TouchableOpacity>
            {/* End */}
        
      
      
            </View>

          )
        })
      }

    </View>
  )
};