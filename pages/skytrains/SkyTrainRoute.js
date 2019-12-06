import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SkyTrainRouteStyles from '../../styles/skytrains/SkyTrainRouteStyles';
import Fonts from '../../styles/FontsStyles';

//import db
import Stops from '../../skytraindb/Stops.json';
import StopTime from '../../skytraindb/Schedule.json';

export default function SkyTrainRoute() {

  const [trainRoute, setTrainRoute] = useState([]);
  // const [ trainStopId,setTrainStopId ] = useState([]);
  // const [ trainStopDo, setTrainStopDo ] = useState([]);
  var TrainStop = Stops.Stops;
  var TrainStopTime = StopTime;
  function GetTrainRoute() {
    const expo = TrainStop.filter(x => x.route_name === 'Expo Line' && x.direction_name === 'Eastbound' && x.expo_direction !== 'Production Way');
    setTrainRoute(expo);
  }
  useEffect(() => {
    GetTrainRoute();
  }, []);
  console.log(TrainStop.stop_id);
  return (
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
              source={require('../../assets/icons/whitetrain.png')}
            />
            <Text style={Fonts.Destination}>TO PRODUCTION WAY</Text>
            {/* <Text style={Fonts.BlueCont}>WATERFRONT</Text> */}
          </View>
          <View style={SkyTrainRouteStyles.BotStyles}>
            <Text style={Fonts.BlueCont}>Station Name</Text>
          </View>
        </View>
        <ScrollView style={SkyTrainRouteStyles.ScrollView}>
          {
            trainRoute.map((obj, i) => {
              
              var time =[];
              for(var j=0; j< StopTime.length; j++){
                if(obj.stop_id === StopTime[j].stop_id){
                  time.push(StopTime[j].arrival_time);
                }
              }
              console.log(time);
              return (

                <View>
                  {/* Train Station */}
                  <TouchableOpacity onPress={() => Actions.FullSkyTrainSchedule(
                    {
                      time:time
                    }
                  )}>

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
                            {obj.stop_name}</Text>
                        </View>
                      </View>

                      <View style={SkyTrainRouteStyles.TimeCont}>
                        {/* <Text style={Fonts.EstNum}>{time}</Text> */}

                        {/* <Text style={Fonts.EstTime}>MIN AWAY</Text> */}

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