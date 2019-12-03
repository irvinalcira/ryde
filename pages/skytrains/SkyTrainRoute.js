import React, {useState, useEffect} from 'react';
import { View, Text, Image,ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import SkyTrainRouteStyles from '../../styles/skytrains/SkyTrainRouteStyles';
import Fonts from '../../styles/FontsStyles';

//import db
import Stops from '../../skytraindb/Stops.json';
import StopTime from '../../skytraindb/Schedule.json';

export default function SkyTrainRoute(){

  const [ trainRoute, setTrainRoute ] = useState();

  function GetTrainRoute() {

    setTrainRoute(expostopnamearr);

  }

        // Dataset Import

        var TrainStop = Stops.Stops;  

        const expo = TrainStop.filter(x => x.route_name === 'Expo Line');
        const expoEast = expo.filter(x => x.direction_name === 'Eastbound');
        const expoWest = expo.filter(x => x.direction_name === 'Westbound');

        var expostopnamearr = [];        
        for (var i=0;i<expo.length;i++){

                expostopnamearr.push(expo[i].stop_name);
           
        }

        // console.log(expostopnamearr);

  return(
    <SafeAreaView style={SkyTrainRouteStyles.Container}>
    <View style={SkyTrainRouteStyles.Container}>
      
        <View style={SkyTrainRouteStyles.TopView}>

        <View style={SkyTrainRouteStyles.NavBar}>

          <View style={SkyTrainRouteStyles.ArrowCont}>
          <TouchableOpacity onPress={() => Actions.pop('SkyTrain Schedules')}>
          <Image
          style={SkyTrainRouteStyles.BackArrow}
          source={require('../../assets/icons/backarrow.png')}
          />
          </TouchableOpacity>
          </View>

          <Text style={[Fonts.BusRoute, SkyTrainRouteStyles.NavTitle]}>Expo Line Station</Text>

          </View>
        
          
          <View style={SkyTrainRouteStyles.MidStyles}>
            <Image
              style={SkyTrainRouteStyles.WhiteTrain}
              source={require('../../assets/icons/whitebus.png')}
            />
              <Text style={Fonts.Destination}>To King George Station</Text>
              <Text style={Fonts.BlueCont}>WATERFRONT</Text>
          </View>
              <View style={SkyTrainRouteStyles.BotStyles}>
                <Text style={Fonts.BlueCont}>Station Name</Text>
                <Text style={Fonts.BlueCont}>Est Time</Text>
              </View>
            
 
          </View>
              <ScrollView style={SkyTrainRouteStyles.ScrollView}>
{

  trainRoute.map((obj,i) => {

    return(
               <View>
                    {/* Train Station */}
                    <TouchableOpacity onPress={() => Actions.SkyTrainStation()}>

                    <View style={SkyTrainRouteStyles.TrainView}>
      
                      <View style={SkyTrainRouteStyles.StationName}>
                      <View style={SkyTrainRouteStyles.TrainCont}>
                        <Image
                          style={SkyTrainRouteStyles.TrainIcon}
                          source={require('../../assets/icons/skytrain-active.png')}
                          />
                      </View>
      
                      <View style={SkyTrainRouteStyles.Address}>
                        <Text 
                        numberOfLines={1}
                        style={Fonts.AddressText}>
                        {expostopnamearr} </Text>
                      </View>
                      </View>
      
                      <View style={SkyTrainRouteStyles.TimeCont}>
                        <Text style={Fonts.EstNum}>3</Text>
                        
                        <Text style={Fonts.EstTime}>MIN AWAY</Text>
      
                      </View>
      
                    </View>
                    </TouchableOpacity>
                    {/* End of Train Station */}
              </View>

    )

  })
  
}

              </ScrollView>


      </View>
      </SafeAreaView>
  )
};