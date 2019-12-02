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

export default function FavBus( {RouteNo, RouteName, Schedules, StopNumber} ){

  const [, forceUpdate] = useState();
  let Min;

  const [ favBus, setFavBus ] = useState([]);

  async function GetFavBus() {
    
    var datanew = await AsyncStorage.getItem("storage")
    var parseFavBus = JSON.parse(datanew);

    setFavBus(parseFavBus.FavBus);
    var favFilter = parseFavBus.FavBus.filter((o,i)=>{
      return o.favbusstopno === 60980;
    });
  }

  async function fetchStopData(){
    var data = {
      "StopNumber": StopNumberInput
    }
   var response = await fetch('https://irvinalcira.com/rydedatabase/StopNumber.php?stopnum=' + StopNumberInput);
     newdata = await response.json();
     if (newdata.length===undefined){
      Alert.alert(
        'No Buses Found'
      )
      // console.log("fetch", newdata);
     }
     else {
      // console.log("fetch", newdata[0].Schedules);
      Actions.BusLastRoute({
        newdata:newdata,
        StopNumberInput:StopNumberInput
      });
     }
   
  }

  useEffect(() => {
    GetFavBus();

  },[]);
    
  let hour;
  let extramin;
  useEffect(() => {
    setTimeout(forceUpdate, 2000);
  }, []);

  var FavoriteBus = null;

  if(favBus === null){

    FavoriteBus = (
      <View><Text>No Favorites</Text></View>
    )

  } else {

    FavoriteBus = (
<View style={FavStyles.CompBox}>

{/* <Text style={Fonts.Body}>
  Start by adding your favorite route for quick access on the Home Page. You can edit, add, or remove favorites anytime.
</Text> */}

<View style={FavStyles.FavCont}>
  { 
  
    favBus.map((obj, i) => {

      var LeftTimeColor = '#363636';
      var LeftTimeSize = 22;
      var RightTimeSize = 16;
      var RightTimeFont = 'Assistant-Regular'

      if (i != 0) {
        LeftTimeColor = 'gray'
        LeftTimeSize = 19;
        RightTimeSize = 15;
      } else {
        LeftTimeColor = '#3971B3'
        LeftTimeSize = 23;
        RightTimeSize = 16
        RightTimeFont = 'Assistant-Bold'
      }

      if (obj.favbusschedule <= 1){
        Min = ""
        obj.favbusschedule="Now";
      } else {
        Min = "Min"
      }
      var Space =  obj.favbusschedule2.split(" ", 1);

      return(

        <View>

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
                          {obj.favbusrouteno} {obj.favbusroutename}
                        </Text> 
                        <Text
                        numberOfLines={1}
                        style={FavStyles.RouteName}>
                          {obj.favbusstopno}
                        </Text> 
                      </View>
                    </View>

                      {/* Stop Number */}
                      <View style={FavStyles.TimeCont}>
                        <Text style={[Fonts.Time, {color:LeftTimeColor, fontSize: LeftTimeSize}]}> {obj.favbusschedule} {Min} </Text>
                        <Text style={FavStyles.RouteName}> {Space} </Text>
                      </View>

                    </View>
                  </TouchableOpacity>
                  {/* End */}

        </View>

      )

    })

  }



</View>
</View>

    )

  }

  return(
    <View>
      {FavoriteBus}
    </View>
  )
};